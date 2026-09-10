const condolenceImages = [
  'cd 1.jpeg',
  'cd 2.jpeg',
  'cd 3.jpeg',
  'cd 4.jpeg',
  'cd 5.jpeg',
  'cd 6.jpeg',
  'cd 7.jpg',
  'cd 8.jpg',
  'cd 9.jpg',
  'cd 10.jpg',
  'cd 11.jpg',
  'cd 12.jpg',
].map((file, i) => ({
  src: `/images/${file}`,
  alt: `Condolence letter ${i + 1}`,
}))

export default condolenceImages