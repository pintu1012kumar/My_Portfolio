import React, { useEffect } from 'react'
import { About, Header, Hero, Skills, Projects, Contact } from './components'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  });
  
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
