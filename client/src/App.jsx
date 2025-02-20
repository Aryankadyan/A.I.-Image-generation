import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets';

import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white
    sm:px-10 px-5 py-5 border-b border-b-[#e6ebf4]'>
      <Link to="/">
      <img src={logo} alt='logo'
      className='w-28 object-container'/>
      </Link>

      <Link to="/create-post"
      className="font-inter font-medium bg-[#8c6eee] text-white px-2 py-2 rounded-md">Create</Link>
    </header>
    <main className='sm:p-10 px-5 py-10 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App

