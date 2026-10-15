export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-2 text-center">
        <p className="font-display text-base text-ink">
          Prince Michael Adakole Ochojila
        </p>
        <p className="text-sm text-ink/60">1945 &ndash; 2024</p>
        <p className="text-xs text-ink/40 mt-4">
          A site built in his honour, with love.
        </p>
        <p className="text-xs text-ink/40">
          Designed &amp; built by{' '}
          <a
            href="https://michaelben-ikheloah.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/60 underline underline-offset-4 decoration-ink/20 hover:text-oxblood hover:decoration-oxblood transition-colors"
          >
            Michael E. Ben-Ikheloah
          </a>
        </p>
      </div>
    </footer>
  )
}