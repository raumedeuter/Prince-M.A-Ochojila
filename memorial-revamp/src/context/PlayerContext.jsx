import { createContext, useContext, useEffect, useRef, useState } from 'react'
import playlist from '../data/playlist.js'

const PlayerContext = createContext(null)

export function PlayerProvider({ children }) {
  const audioRef = useRef(null)
  if (!audioRef.current) audioRef.current = new Audio()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  // Load a new track whenever the current index changes
  useEffect(() => {
    const audio = audioRef.current
    audio.src = `/audio/${encodeURIComponent(playlist[currentIndex].file)}`
    if (isPlaying) audio.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  // Auto-advance to the next track when one finishes
  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => next()
    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  const play = (index) => {
    if (typeof index === 'number' && index !== currentIndex) {
      setCurrentIndex(index)
    }
    setIsPlaying(true)
    audioRef.current.play()
  }

  const pause = () => {
    setIsPlaying(false)
    audioRef.current.pause()
  }

  const toggle = () => (isPlaying ? pause() : play(currentIndex))

  const next = () => {
    setCurrentIndex((i) => (i + 1) % playlist.length)
    setIsPlaying(true)
  }

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length)
    setIsPlaying(true)
  }

  return (
    <PlayerContext.Provider
      value={{ playlist, currentIndex, isPlaying, play, pause, toggle, next, prev }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export function usePlayer() {
  return useContext(PlayerContext)
}