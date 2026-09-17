import { useEffect, useRef } from 'react'
import useActiveChapter from '../hooks/useActiveChapter.js'

export function ChapterNavDesktop({ chapters }) {
  const activeId = useActiveChapter(chapters)

  return (
    <nav className="hidden lg:block sticky top-28 self-start w-48 shrink-0">
      <ul className="space-y-3 text-sm">
        {chapters.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={`block border-l-2 pl-3 transition-colors ${
                activeId === c.id
                  ? 'border-oxblood text-oxblood'
                  : 'border-ink/10 text-ink/50 hover:text-ink/80 hover:border-ink/30'
              }`}
            >
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ChapterNavMobile({ chapters }) {
  const activeId = useActiveChapter(chapters)
  const activeRef = useRef(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeId])

  return (
    <nav className="lg:hidden sticky top-[65px] z-40 -mx-6 px-6 py-3 bg-ivory/95 backdrop-blur border-b border-ink/10 overflow-x-auto">
      <ul className="flex gap-5 text-sm whitespace-nowrap w-max">
        {chapters.map((c) => (
          <li key={c.id} ref={activeId === c.id ? activeRef : null}>
            <a
              href={`#${c.id}`}
              className={activeId === c.id ? 'text-oxblood' : 'text-ink/50'}
            >
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
