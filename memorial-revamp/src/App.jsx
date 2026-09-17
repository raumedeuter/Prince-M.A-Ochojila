import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlayerProvider } from './context/PlayerContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Biography from './pages/Biography.jsx'
import Gallery from './pages/Gallery.jsx'
import Memory from './pages/Memory.jsx'
import Condolence from './pages/Condolence.jsx'
import Credits from './pages/Credits.jsx'

function App() {
  return (
    <PlayerProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/condolence" element={<Condolence />} />
            <Route path="/credits" element={<Credits />} />
            {/* Events route comes in a later step */}
          </Route>
        </Routes>
      </BrowserRouter>
    </PlayerProvider>
  )
}

export default App