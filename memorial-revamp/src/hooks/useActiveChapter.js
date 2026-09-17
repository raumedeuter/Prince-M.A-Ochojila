import { useEffect, useState } from 'react'

// Recomputes the active chapter by scanning all section positions on every
// intersection change, rather than trusting IntersectionObserver entry order
// (which isn't reliable across large/instant scroll jumps).
export default function useActiveChapter(chapters) {
  const [activeId, setActiveId] = useState(chapters[0]?.id)

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const lineY = () => window.innerHeight * 0.3

    const recompute = () => {
      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= lineY()) {
          current = section.id
        } else {
          break
        }
      }
      setActiveId(current)
    }

    const observer = new IntersectionObserver(recompute, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })
    sections.forEach((s) => observer.observe(s))
    recompute()

    return () => observer.disconnect()
  }, [chapters])

  return activeId
}
