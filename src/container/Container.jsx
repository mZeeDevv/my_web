import React from 'react'
import Taskbar from '../assests/Taskbar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Skills from '../pages/Skills'
import { Routes, Route} from 'react-router-dom';

export default function Container() {

  return (
    <div
     className='border-4 border-black mx-auto md:h-[750px] md:w-[850px] bg-[#ECF2FF] flex md:p-4 p-2
      border-double rounded-md'
    >
      <Taskbar/>
     <div className='mx-4 bg-white w-full'>
     <Routes>
      <Route path='/' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />
     </Routes>
     </div>
    </div>
  )
}
