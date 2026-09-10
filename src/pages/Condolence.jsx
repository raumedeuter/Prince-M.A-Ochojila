import { useState } from 'react'
import condolenceImages from '../data/condolenceImages.js'
import Lightbox from '../components/Lightbox.jsx'

export default function Condolence() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm tracking-wide text-oxblood mb-3">Condolences</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          Condolence Letters
        </h1>
        <p className="text-ink/60 mt-3 max-w-md mx-auto">
          Words sent by those whose lives he touched.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {condolenceImages.map((image, i) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(i)}
            className="block aspect-[3/4] overflow-hidden rounded-sm border border-ink/10"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={condolenceImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  )
}