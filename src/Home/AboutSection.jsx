import React from 'react'
import expImg from '../assets/experience.png'
import eduImg from '../assets/education.png'
import aboutImg from '../assets/hero-img.png'

function AboutSection() {
  return (
    <main id='aboutmMe' className='mobile:px-[11%] px-[7%] text-center lg:mt-[300px] mt-[150px]'>
      <p className='text-lg text-gray-600'>Get To Know More</p>
      <h1 className='text-4xl font-bold'>About Me</h1>
      <section className='flex items-center mt-14 justify-between sm:gap-[5rem] gap-11 lg:flex-row flex-col'>
        <div className='xl:w-[80%] lg:w-[100%]  mobile:w-[300px] w-[250px]'>
          <img src={aboutImg} className='rounded-3xl border'/>
        </div>
        <div className='space-y-11'>
          <div className='flex gap-4 sm:flex-row flex-col'>
            <div className='border-[2px] border-gray-300 rounded-3xl text-center p-5 w-full'>
              <img src={expImg} className='w-10 mx-auto'/>
              <h2 className='text-xl font-semibold'>Experience</h2>
              <p className='text-gray-600'>1+ years</p>
              <h2 className='text-gray-600'>Frontend Development</h2>
            </div>
            {/* <div className='border-[2px] border-gray-300 rounded-3xl text-center p-5 w-full'>
              <img src={eduImg} className='w-10 mx-auto'/>
              <h2 className='text-xl font-semibold'>Education</h2>
              <p className='text-gray-600'>BTECH</p>
              <h2 className='text-gray-600'>Computer Science</h2>
            </div> */}
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

export default AboutSection
