import { useEffect, useState } from 'react'
import TributeForm from '../components/TributeForm.jsx'
import TributeList from '../components/TributeList.jsx'

const API_URL = import.meta.env.VITE_API_URL

export default function Memory() {
  const [tributes, setTributes] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'ready' | 'error'
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    fetch(`${API_URL}/api/tributes`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load tributes')
        return res.json()
      })
      .then((data) => {
        setTributes(data)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  const addTribute = async ({ name, text }) => {
    setSubmitError('')
    try {
      const res = await fetch(`${API_URL}/api/tributes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text }),
      })
      const data = await res.json()

      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setTributes((prev) => [data, ...prev])
    } catch {
      setSubmitError('Could not reach the server. Please try again.')
    }
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
      {submitError && (
        <p className="text-center text-sm text-oxblood mt-4">{submitError}</p>
      )}

      {status === 'loading' && (
        <p className="text-center text-ink/40 mt-16">Loading tributes...</p>
      )}
      {status === 'error' && (
        <p className="text-center text-ink/40 mt-16">
          Couldn't load tributes right now. Please refresh the page.
        </p>
      )}
      {status === 'ready' && <TributeList tributes={tributes} />}
    </div>
  )
}