import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PlayerBar from './PlayerBar.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body pb-16">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <PlayerBar />
    </div>
  )
}