import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='base:px-[10%] px-[4%] pt-[200px] pb-[300px] text-center'>
      <p className='text-lg text-gray-600'>Get in Touch</p>
      <h1 className='text-4xl font-bold'>Contact Me</h1>
      <section className='border mt-14 bg-[#fff] rounded-3xl text-center p-5 flex flex-wrap md:justify-center md:gap-8 gap-4 md:w-[80%] mx-auto'>
        <div className='flex items-center gap-2'>
            <span className='text-2xl items-center flex mt-1'><ion-icon name="mail-outline"></ion-icon></span>
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

export default Contact
