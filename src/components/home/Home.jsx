import React from 'react'
import Hero_img from '../../assets/hero-img.png'
import htmlLogo from '../../assets/html.png'
import cssLogo from '../../assets/css.png'
import jslLogo from '../../assets/js.png'
import reactLogo from '../../assets/react.png'
import tailwindLogo from '../../assets/tailwind.png'
import 'aos/dist/aos.css'

function Home() {
    return (
        <main id='homeSection' className='base:px-[10%] px-[4%] mobile:pt-[150px] pt-[120px] text-[1.1rem] '>
            <section className='flex justify-between items-center lg:gap-[11rem] gap-10 lg:flex-row flex-col-reverse'>
                <div className='lg:text-start text-center'>
                <h1 className='text-4xl font-bold'>Front-End React <br /> Developer <span className='text-2xl'>👋</span></h1>
                <p className='my-4 mobile:text-[1.1rem] lg:text-start text-center'>
                    Hi, I'm wasif ! <br /> A passionate react frontend developer with cutting-edge technologies.
                </p>
                <div className='flex gap-3 items-center text-2xl justify-center lg:justify-start'>
                    <button><a href="https://www.linkedin.com/in/wasif-ansari-75b9b0295/"><ion-icon name="logo-linkedin"></ion-icon></a></button>
                    <button><a href="https://github.com/wasif190"><ion-icon name="logo-github"></ion-icon></a></button>
                </div>
                </div>

                <div className='profile-img border border-[#ccc] xl:w-[300px] xl:h-[330px] lg:w-[400px] lg:h-[350px] h-[290px] w-[260px]'>
                    {/* <img src={Hero_img} className='lg:w-[550px] xl:w-[450px] mobile:w-[300px] w-[250px] rounded-full'/> */}
                </div>
            </section>

            <div className='flex sm:flex-row flex-col gap-8 lg:mt-0 mt-[2rem] justify-center lg:justify-start sm:-ml-[12rem] lg:-ml-0 ml-3'>
                <p className='mobile:text-lg font-medium'>Tech Stack <span className='pl-4 text-gray-600 text-xl font-normal'>|</span></p>
                <div className='flex gap-8 w-[20px] mt-1' data-aos="fade-right">
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

export default Home
