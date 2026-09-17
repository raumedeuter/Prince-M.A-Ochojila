import { usePlayer } from '../context/PlayerContext.jsx'

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
            className="text-ivory/70 hover:text-ivory text-xl leading-none"
          >
            &#8249;
          </button>
          <button
            onClick={toggle}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-9 h-9 rounded-full bg-oxblood hover:bg-oxblood-dark transition-colors flex items-center justify-center text-sm"
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <button
            onClick={next}
            aria-label="Next track"
            className="text-ivory/70 hover:text-ivory text-xl leading-none"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  )
}