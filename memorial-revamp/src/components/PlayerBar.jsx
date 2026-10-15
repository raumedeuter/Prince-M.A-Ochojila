import { usePlayer } from '../context/PlayerContext.jsx'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 translate-x-px" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
    </svg>
  )
}

function PrevIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M6 6h2v12H6zM9.5 12l8.5 6V6z" />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z" />
    </svg>
  )
}

export default function PlayerBar() {
  const { playlist, currentIndex, isPlaying, toggle, next, prev } = usePlayer()
  const track = playlist[currentIndex]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-ink text-ivory border-t border-ivory/10">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm truncate">{track.title}</p>
          <p className="text-xs text-ivory/50 truncate">{track.artist}</p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous track"
            className="text-ivory/70 hover:text-ivory p-1"
          >
            <PrevIcon />
          </button>
          <button
            onClick={toggle}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-9 h-9 rounded-full bg-oxblood hover:bg-oxblood-dark transition-colors flex items-center justify-center"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            onClick={next}
            aria-label="Next track"
            className="text-ivory/70 hover:text-ivory p-1"
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  )
}