const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const { pool, ensureSchema } = require('../src/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Allow the local dev server plus whatever deployed frontend URL is set
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// GET /api/tributes — newest first
app.get('/api/tributes', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, text, created_at AS date FROM tributes ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching tributes:', err);
    res.status(500).json({ error: 'Could not load tributes.' });
  }
});

// POST /api/tributes — validated, server sets the timestamp itself
app.post(
  '/api/tributes',
  [
    body('name').trim().notEmpty().withMessage('Name is required.').isLength({ max: 100 }),
    body('text').trim().notEmpty().withMessage('Tribute text is required.').isLength({ max: 2000 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, text } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO tributes (name, text) VALUES ($1, $2) RETURNING id, name, text, created_at AS date',
        [name, text]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error('Error saving tribute:', err);
      res.status(500).json({ error: 'Could not save tribute.' });
    }
  }
);

app.get('/', (req, res) => {
  res.send('Memorial site API is running.');
});

ensureSchema()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to set up database schema:', err);
    process.exit(1);
  });