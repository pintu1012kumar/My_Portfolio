import React from 'react'
import WordByWordAnimation from './WordByWordAnimation'

function Hero() {
  return (
    <main id='hero' className='md:px-[10%] px-[4%] lg:pt-[220px] pt-[150px] text-[1.1rem] '>
        <section className='flex justify-between items-center lg:gap-[11rem] gap-10 lg:flex-row flex-col-reverse'>
            <div className='lg:text-start text-center'>
            <h1 className='text-4xl font-bold font-sans' data-aos="fade-right"> <span className='text-blue-600'>MERN</span>  Stack <br /> Developer <span className='text-2xl'>👋</span></h1>
            <p className='my-4 mobile:text-[1.1rem] lg:text-start text-center'>
                Hi, I'm <span className='font-bold text-blue-500'>Pintu Kumar !</span> <br /> 
               {/* <p> A passionate MERN Stack developer who works with the latest technologies.</p> */}
               <WordByWordAnimation />
            </p>
            <div className='flex gap-3 items-center text-2xl justify-center lg:justify-start'>
                <button><a href="https://www.linkedin.com/in/pintu-kumar-%F0%9F%9A%80-84a304270/"><ion-icon name="logo-linkedin"></ion-icon></a></button>
                <button><a href="https://github.com/pintu1012kumar"><ion-icon name="logo-github"></ion-icon></a></button>
                <button><a href="https://twitter.com/Pintu1012kumar"><ion-icon name="logo-twitter"></ion-icon></a></button>
            </div>
            </div>

            <div className='profile-img xl:w-[300px] xl:h-[300px] lg:w-[400px] lg:h-[350px] h-[290px] w-[260px]'>
    {/* <img src={Hero_img} className='lg:w-[550px] xl:w-[450px] mobile:w-[300px] w-[250px] rounded-full'/> */}
</div>

        </section>
    </main>
  )
}

export default Hero
