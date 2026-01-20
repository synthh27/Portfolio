import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'


const App = () => {
  return (
    <div className='max-w-[768px] h-fit mx-auto p-15 pt-10 pb-5 shadow-2xl backdrop-blur-2xl divide divide-y-2 divide-dashed divide-slate-500'>
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App