// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'
import Notecard from '../components/Notecard'

function Home() {

  const { notes, loading } = useContext(NoteContext)

  if (loading) {
    return (
      <div className='min-h-[70vh] flex items-center justify-center'>
        <div className='text-center'>

          <div className='w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto'></div>

          <p className='mt-5 text-lg text-gray-300'>
            Loading your notes...
          </p>

        </div>
      </div>
    )
  }

  if (notes.length === 0) {
    return (
      <div className='min-h-[70vh] flex flex-col items-center justify-center text-center px-4'>

        <h1 className='text-4xl sm:text-6xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent'>
          No Notes Yet
        </h1>

        <p className='text-gray-400 mt-5 max-w-md'>
          Start writing your ideas, thoughts, plans and important things beautifully.
        </p>

      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7'>
      {notes.map((note) => (
        <Notecard key={note._id} note={note} />
      ))}
    </div>
  )
}

export default Home