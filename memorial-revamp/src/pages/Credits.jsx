import { usePlayer } from '../context/PlayerContext.jsx'

export default function Credits() {
  const { playlist, currentIndex, isPlaying, play } = usePlayer()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm tracking-wide text-oxblood mb-3">Credits</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">Music</h1>
        <p className="text-ink/60 mt-3 max-w-md mx-auto">
          The songs that carried his memory. Tap any track to listen.
        </p>
      </div>

      <div className="border-t border-ink/10">
        {playlist.map((track, i) => {
          const active = i === currentIndex
          return (
            <button
              key={track.file}
              onClick={() => play(i)}
              className={`w-full flex items-center gap-4 py-4 border-b border-ink/10 text-left transition-colors ${
                active ? 'text-oxblood' : 'text-ink hover:text-oxblood'
              }`}
            >
              <span className="w-5 text-center shrink-0 text-sm">
                {active && isPlaying ? '♪' : i + 1}
              </span>
              <span className="min-w-0">
                <span className="block truncate">{track.title}</span>
                <span className="block text-sm text-ink/50 truncate">
                  {track.artist} &middot; {track.year}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="text-center mt-20">
        <p className="text-sm tracking-wide text-oxblood mb-3">Built by</p>
        <h2 className="font-display text-2xl md:text-3xl text-ink">
          Michael E. Ben-Ikheloah
        </h2>
        <p className="text-ink/60 mt-3 max-w-md mx-auto">
          Designed and developed as a tribute to my grandfather.
        </p>
        <a
          href="https://michaelben-ikheloah.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-sm text-ink/70 underline underline-offset-4 decoration-ink/20 hover:text-oxblood hover:decoration-oxblood transition-colors"
        >
          View my portfolio
        </a>
      </div>
    </div>
  )
}