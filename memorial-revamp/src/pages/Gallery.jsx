import { useState } from 'react'
import galleryImages from '../data/galleryImages.js'
import Lightbox from '../components/Lightbox.jsx'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm tracking-wide text-oxblood mb-3">Gallery</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          Moments in Pictures
        </h1>
      </div>

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
        {galleryImages.map((image, i) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(i)}
            className="block w-full mb-3 break-inside-avoid"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full rounded-sm hover:opacity-90 transition-opacity"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  )
}