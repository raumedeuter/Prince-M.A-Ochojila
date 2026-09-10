import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  )
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  )

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, goPrev, goNext])

  const image = images[index]

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 text-ivory/70 hover:text-ivory text-3xl leading-none"
      >
        &times;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
        aria-label="Previous photo"
        className="absolute left-3 md:left-6 text-ivory/70 hover:text-ivory text-4xl leading-none px-2"
      >
        &#8249;
      </button>

      <img
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[85vw] object-contain rounded-sm"
      />

      <button
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
        aria-label="Next photo"
        className="absolute right-3 md:right-6 text-ivory/70 hover:text-ivory text-4xl leading-none px-2"
      >
        &#8250;
      </button>

      <p className="absolute bottom-5 text-ivory/50 text-sm">
        {index + 1} / {images.length}
      </p>
    </div>
  )
}