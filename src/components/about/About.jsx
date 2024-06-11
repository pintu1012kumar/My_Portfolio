import React from 'react'

function About() {
  return (
    <main id='aboutSection' className='base:px-[10%] px-[4%] lg:pt-[300px] pt-[110px]'>
      <p className='text-lg text-[#ccc] text-center'>Get To Know More</p>
      <h1 className='text-4xl font-bold text-center'>About Me</h1>
      <section className='flex items-center mt-14 justify-between sm:gap-[5rem] gap-11 lg:flex-row flex-col'>
        <div className='space-y-11'>
          <div className='flex gap-4 sm:flex-row flex-col'>
            <div className='border border-[#a2a2a2] rounded-3xl text-center sm:p-5 p-2 w-full bg-[#333]' data-aos="fade-left">
              <span className='text-3xl text-[#e4e4e4]'><ion-icon name="medal-outline"></ion-icon></span>
              <h2 className='text-xl font-semibold'>Experience</h2>
              <p className='text-[#dedede]'>1+ years</p>
              <h2 className='text-[#dedede]'>Frontend Development</h2>
            </div>
            <div className='border border-[#a2a2a2]  rounded-3xl text-center sm:p-5 p-2 w-full bg-[#333]' data-aos="fade-right">
              <span className='text-3xl text-[#e4e4e4]'><ion-icon name="people-outline"></ion-icon></span>
              <h2 className='text-xl font-semibold'>Education</h2>
              <p className='text-[#dedede]'>BTECH</p>
              <h2 className='text-[#dedede]'>CSE AI/ML</h2>
            </div>
          </div>
          <p className='mobile:text-[1.1rem] mobile:text-start text-justify'>
            Hey! I'm wasif, a frontend React developer hailing from India, 
            specializes in crafting elegant solutions with clean code. 
            Passionate about creating seamless user experiences, he brings creativity and precision to every project.
          </p>
          <button className='rounded-md py-2.5 px-4 justify-start bg-[#3d3d3d] transition-all duration-300 mobile:w-[200px] w-full text-white border border-[#444] hover:bg-[#e4e4e4] hover:text-black hover:border-[#444]'>
            Download CV
          </button>
        </div>
      </section>
    </main>
  )
}

export default About
