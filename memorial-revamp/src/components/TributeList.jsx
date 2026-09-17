function formatDate(iso) {
  return new Date(iso).toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

export default function TributeList({ tributes }) {
  if (tributes.length === 0) {
    return (
      <p className="text-center text-ink/50 mt-16">
        Be the first to leave a tribute.
      </p>
    )
  }

  return (
    <div className="max-w-xl mx-auto mt-16 space-y-8">
      {tributes.map((tribute) => (
        <div key={tribute.id} className="border-t border-ink/10 pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display text-lg text-ink">{tribute.name}</p>
            <p className="text-xs text-ink/40 whitespace-nowrap">
              {formatDate(tribute.date)}
            </p>
          </div>
          <p className="text-ink/75 leading-relaxed mt-2">{tribute.text}</p>
        </div>
      ))}
    </div>
  )
}