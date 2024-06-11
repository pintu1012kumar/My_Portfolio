import React, { useEffect } from 'react'
import { About, Contact, Header, Home, Projects, Skills } from './components'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  });

  return (
    <div className='bg-[#222] text-white'>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
