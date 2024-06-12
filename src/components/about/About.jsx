import React from 'react'
import eduImg from '../../assets/education.png'
import expImg from '../../assets/experience.png'
import aboutImg from '../../assets/hero-img.png'

function About() {
  return (
    <main id='aboutSection' className='base:px-[10%] px-[4%] text-center lg:pt-[300px] pt-[110px]'>
      <p className='text-lg text-gray-600'>Get To Know More</p>
      <h1 className='text-4xl font-bold'>About Me</h1>
      <section className='flex items-center mt-14 justify-between sm:gap-[5rem] gap-11 lg:flex-row flex-col'>
        <div className='xl:w-[70%] lg:w-[100%]  mobile:w-[300px] w-[250px]'>
          <img src={aboutImg} className='rounded-3xl border'/>
        </div>
        <div className='space-y-11'>
          <div className='flex gap-4 sm:flex-row flex-col'>
            <div className='border rounded-3xl text-center sm:p-5 p-2 w-full bg-[#fff]'>
              <img src={expImg} className='w-10 mx-auto'/>
              <h2 className='text-xl font-semibold'>Experience</h2>
              <p className='text-gray-600'>1+ years</p>
              <h2 className='text-gray-600'>Frontend Development</h2>
            </div>
            <div className='border rounded-3xl text-center sm:p-5 p-2 w-full bg-[#fff]'>
              <img src={eduImg} className='w-10 mx-auto'/>
              <h2 className='text-xl font-semibold'>Education</h2>
              <p className='text-gray-600'>BTECH</p>
              <h2 className='text-gray-600'>CSE AI/ML</h2>
            </div>
          </div>
          <p className='mobile:text-[1.1rem] mobile:text-start text-justify'>
            Hey! I'm wasif, a frontend React developer hailing from India, 
            specializes in crafting elegant solutions with clean code. 
            Passionate about creating seamless user experiences, he brings creativity and precision to every project.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
