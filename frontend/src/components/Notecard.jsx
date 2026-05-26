// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext'

function Notecard({ note }) {

  const { deleteNote, updateNote } = useContext(NoteContext)

  const [isEditing, setIsEditing] = useState(false)

  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content
  })

  const handleUpdate = () => {
    updateNote(note._id, editData)
    setIsEditing(false)
  }

  return (

    <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-6 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40'>

      {/* Glow */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/10 to-cyan-500/10'></div>

      {isEditing ? (

        <div className='relative z-10'>

          <input
            type="text"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
            className='w-full bg-[#1c1c1c] border border-white/10 rounded-2xl px-4 py-3 text-white outline-none focus:border-pink-500 mb-4'
          />

          <textarea
            rows="5"
            value={editData.content}
            onChange={(e) =>
              setEditData({ ...editData, content: e.target.value })
            }
            className='w-full bg-[#1c1c1c] border border-white/10 rounded-2xl px-4 py-3 text-white outline-none focus:border-cyan-500 mb-5'
          />

          <div className='flex gap-3'>

            <button
              onClick={handleUpdate}
              className='flex-1 bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-2xl font-semibold'
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className='flex-1 bg-[#222] py-3 rounded-2xl font-semibold hover:bg-[#333]'
            >
              Cancel
            </button>

          </div>
        </div>

      ) : (

        <div className='relative z-10 flex flex-col h-full'>

          <div className='flex items-start justify-between gap-4'>

            <h2 className='text-2xl font-bold leading-tight break-words'>
              {note.title}
            </h2>

            <div className='w-3 h-3 rounded-full bg-pink-500 mt-2'></div>

          </div>

          <p className='text-gray-400 mt-5 leading-7 flex-1 break-words'>
            {note.content}
          </p>

          <div className='mt-8 flex items-center justify-between flex-wrap gap-4'>

            <span className='text-sm text-gray-500'>
              {new Date(note.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>

            <div className='flex gap-3 w-full sm:w-auto'>

              <button
                onClick={() => setIsEditing(true)}
                className='flex-1 sm:flex-none px-5 py-2 rounded-xl bg-white text-black font-semibold hover:scale-105 transition'
              >
                Edit
              </button>

              <button
                onClick={() => deleteNote(note._id)}
                className='flex-1 sm:flex-none px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 font-semibold transition'
              >
                Delete
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notecard