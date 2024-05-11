import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'
import ContactMe from './ContactMe'

export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroSection/>
     <AboutSection/>
     <ProjectSection/>
     <ContactMe/>
    </>
  )
}
