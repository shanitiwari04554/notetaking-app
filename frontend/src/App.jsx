// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Createnote from './pages/Createnote'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-[#0a0a0a] text-white relative overflow-hidden'>

      {/* Background */}
      <div className='absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[120px] rounded-full'></div>

      <div className='absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-500 opacity-20 blur-[120px] rounded-full'></div>

      <Navbar />

      <main className='flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 relative z-10'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Createnote />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App