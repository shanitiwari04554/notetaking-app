// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

function Noteform() {

  const { createNote } = useContext(NoteContext)

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  const handleSubmit = (e) => {

    e.preventDefault()

    if (!note.title || !note.content) return

    createNote(note)

    setNote({
      title: "",
      content: ""
    })
  }

  return (

    <div className='w-full max-w-2xl bg-[#111111] border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl'>

      <div className='text-center mb-8'>

        <h1 className='text-4xl sm:text-5xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent'>
          Create Note
        </h1>

        <p className='text-gray-400 mt-3'>
          Write your thoughts beautifully
        </p>

      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>

        <input
          type="text"
          placeholder="Enter title..."
          value={note.title}
          onChange={(e) =>
            setNote({ ...note, title: e.target.value })
          }
          className='w-full bg-[#1c1c1c] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-pink-500'
        />

        <textarea
          rows="7"
          placeholder="Write your note..."
          value={note.content}
          onChange={(e) =>
            setNote({ ...note, content: e.target.value })
          }
          className='w-full bg-[#1c1c1c] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-500'
        />

        <button
          type="submit"
          className='w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 text-lg font-bold hover:scale-[1.02] transition duration-300'
        >
          Add Note
        </button>

      </form>
    </div>
  )
}

export default Noteform