import React from 'react'

function ContactMe() {
  return (
    <div id='contactMe' className='mobile:px-[11%] px-[7%] text-center lg:mt-[200px] pt-[80px] pb-[200px]'>
      <p className='text-lg text-gray-600'>Get in Touch</p>
      <h1 className='text-4xl font-bold'>Contact Me</h1>
      <section className='border-[2px] mt-14 border-gray-300 rounded-3xl text-center p-5 flex flex-wrap md:justify-center md:gap-8 gap-4 md:w-[80%] mx-auto'>
        <div className='flex items-center gap-2'>
            <span className='text-2xl items-center flex'><ion-icon name="mail-outline"></ion-icon></span>
            <a href="mailto:wasif19010@gmail.com" className='text-lg'>wasif19010@gmail.com</a>
        </div>
        <div className='flex items-center gap-2'>
            <span className='text-2xl items-center flex'><ion-icon name="logo-linkedin"></ion-icon></span>
            <a href="https://www.linkedin.com/in/wasif-ansari-75b9b0295/" className='text-lg'>LinkedIn</a>
        </div>
      </section>
    </div>
  )
}

export default ContactMe
