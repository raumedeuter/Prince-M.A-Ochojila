import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="text-sm tracking-wide text-oxblood mb-4">
            1945 &ndash; 2024
          </p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink">
            Prince Michael
            <br />
            Adakole Ochojila
          </h1>
          <div className="h-px w-24 bg-gold my-6" />
          <p className="text-lg text-ink/70 max-w-md">
            A Grandfather, Father and Brother &mdash; remembered for a life
            of service, warmth, and quiet strength.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/biography"
              className="px-6 py-3 bg-oxblood text-ivory text-sm rounded-sm hover:bg-oxblood-dark transition-colors"
            >
              Read His Biography
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 border border-ink/20 text-ink text-sm rounded-sm hover:border-oxblood hover:text-oxblood transition-colors"
            >
              Watch the Service
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-oxblood/10" />
          <img
            src="/images/home-img2.png"
            alt="Prince Michael Adakole Ochojila"
            className="relative w-64 md:w-72 object-contain"
          />
        </div>
      </section>

      {/* ---------- Biography preview ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center border-t border-ink/10">
        <img
          src="/images/IMG-20240707-WA0085.jpg"
          alt="A younger Prince Michael Adakole Ochojila"
          className="w-full max-w-sm mx-auto md:mx-0 rounded-sm"
        />
        <div>
          <h2 className="font-display text-3xl text-ink mb-1">Biography</h2>
          <p className="text-sm text-oxblood mb-5">A Life of Service</p>
          <p className="text-ink/70 leading-relaxed">
            Prince Michael Adakole Ochojila (JP) passed on to glory on
            Saturday the 15th of June 2024. A gem in the eyes of many and a
            foundation for many successes. In his lifetime, he affected a
            lot of people in several ways, and the result of his impact
            will last for a very long time.
          </p>
          <Link
            to="/biography"
            className="inline-block mt-6 text-sm text-oxblood border-b border-oxblood/40 hover:border-oxblood transition-colors"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* ---------- Photo gallery preview ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 border-t border-ink/10">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl text-ink">Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'IMG-20240707-WA0081.jpg',
            'IMG-20240707-WA0082.jpg',
            'IMG-20240707-WA0086.jpg',
            'IMG-20240707-WA0087.jpg',
            'IMG-20240707-WA0089.jpg',
            'gallery 16.jpg',
          ].map((file) => (
            <img
              key={file}
              src={`/images/${file}`}
              alt=""
              className="w-full h-40 md:h-52 object-cover rounded-sm"
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="px-6 py-3 border border-ink/20 text-ink text-sm rounded-sm hover:border-oxblood hover:text-oxblood transition-colors inline-block"
          >
            See More
          </Link>
        </div>
      </section>

      {/* ---------- Memory wall preview ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 border-t border-ink/10 text-center">
        <h2 className="font-display text-3xl text-ink mb-4">Memory Wall</h2>
        <p className="text-ink/70 max-w-md mx-auto mb-8">
          Share a memory, a word of comfort, or a tribute in his honour.
        </p>
        <Link
          to="/memory"
          className="px-6 py-3 bg-oxblood text-ivory text-sm rounded-sm hover:bg-oxblood-dark transition-colors inline-block"
        >
          Write a Tribute
        </Link>
      </section>
    </>
  )
}
