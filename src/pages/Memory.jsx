import { useState } from 'react'
import TributeForm from '../components/TributeForm.jsx'
import TributeList from '../components/TributeList.jsx'

export default function Memory() {
  const [tributes, setTributes] = useState([])

  const addTribute = ({ name, text }) => {
    const newTribute = {
      id: crypto.randomUUID(),
      name,
      text,
      date: new Date().toISOString(),
    }
    setTributes((prev) => [newTribute, ...prev])
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm tracking-wide text-oxblood mb-3">Memory Wall</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink">
          Share a Tribute
        </h1>
        <p className="text-ink/60 mt-3 max-w-md mx-auto">
          A memory, a word of comfort, or what he meant to you.
        </p>
      </div>

      <TributeForm onSubmit={addTribute} />
      <TributeList tributes={tributes} />
    </div>
  )
}