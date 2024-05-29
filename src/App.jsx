import React from 'react'
import { About, Contact, Header, Home, Projects, Skills } from './components'

function App() {
  return (
    <div className='bg-[#f8f8f8]'>
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
