import { useState } from 'react'

export default function TributeForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '' || text.trim() === '') {
      setError('Please enter your name and write a tribute.')
      return
    }

    onSubmit({ name: name.trim(), text: text.trim() })
    setName('')
    setText('')
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-ink/15 rounded-sm p-6 md:p-8 max-w-xl mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="userName" className="block text-sm text-ink/60 mb-1">
          Your name
        </label>
        <input
          id="userName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-oxblood transition-colors"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="tributeText" className="block text-sm text-ink/60 mb-1">
          Your tribute
        </label>
        <textarea
          id="tributeText"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share a memory, a word of comfort, or what he meant to you..."
          className="w-full border-b border-ink/20 bg-transparent py-2 outline-none focus:border-oxblood transition-colors resize-none"
        />
      </div>

      {error && <p className="text-sm text-oxblood mb-4">{error}</p>}

      <button
        type="submit"
        className="px-6 py-3 bg-oxblood text-ivory text-sm rounded-sm hover:bg-oxblood-dark transition-colors"
      >
        Submit Tribute
      </button>
    </form>
  )
}