import React from 'react'
import Hero_img from '../assets/hero-img.png'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'
import jslLogo from '../assets/js.png'
import reactLogo from '../assets/react.png'
import tailwindLogo from '../assets/tailwind.png'

function HeroSection() {
  return (
    <main id='heroSection' className='mobile:px-[11%] px-[7%] pt-[140px] text-[1.1rem]'>
      <section className='flex justify-between items-center lg:gap-[11rem] gap-10 lg:flex-row flex-col-reverse'>
        <div className='lg:text-start text-center'>
          {/* <p className='text-2xl text-[#515151]'>Hey, I'm wasif</p> */}
          <h1 className='text-4xl font-bold'>Front-End React <br /> Developer <span className='text-2xl'>👋</span></h1>
          <p className='my-4 mobile:text-[1.1rem] mobile:text-start text-center'>
            Hi, I'm wasif. A passionate react frontend developer creating seamless, elegant web experiences with cutting-edge technology.
          </p>
          <div className='flex gap-3 items-center text-2xl justify-center lg:justify-start'>
            <button><a href="https://www.linkedin.com/in/wasif-ansari-75b9b0295/"><ion-icon name="logo-linkedin"></ion-icon></a></button>
            <button><a href="https://github.com/wasif190"><ion-icon name="logo-github"></ion-icon></a></button>
          </div>
        </div>
        <div className='border-[1.5px] border-black rounded-full'>
          <img src={Hero_img} className='lg:w-[550px] xl:w-[450px] mobile:w-[300px] w-[250px] rounded-full'/>
        </div>
      </section>

      <div className='flex mobile:gap-[3.6rem] gap-6 mobile:items-center mt-16 mobile:flex-row flex-col'>
        <p className='text-lg font-medium'>Tech Stack <span className='pl-4 text-gray-600 text-xl font-normal'>|</span></p>
        <div className='flex gap-8 w-[20px] mt-1'>
          <img src={htmlLogo}/>
          <img src={cssLogo}/>
          <img src={jslLogo}/>
          <img src={reactLogo}/>
          <img src={tailwindLogo}/>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
