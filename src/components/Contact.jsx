import React from 'react'

function Contact() {
    return (
        <main id='contact' className='md:px-[10%] px-[4%] lg:pt-[200px] pt-[150px] overflow-x-hidden pb-[280px]'>
            <section className='text-center font-sans'>
                <p className='text-gray-500'>Get in Touch</p>
                <h1 className='text-3xl font-bold'>Contact Me</h1>
            </section>

            <section className='mt-8 w-full sm:flex-row flex-col md:w-[50%] mx-auto flex justify-center gap-3.5 sm:gap-[3rem] border-[1.7px] border-cardBorder rounded-xl bg-card text-gray-100 text-center p-4' data-aos="zoom-in-up">
                <div className='flex items-center gap-2'>
                    <span className='text-2xl items-center flex mt-1'><ion-icon name="mail-outline"></ion-icon></span>
                    <a href="mailto:wasif19010@gmail.com" className='text-lg'>wasif19010@gmail.com</a>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-2xl items-center flex'><ion-icon name="logo-linkedin"></ion-icon></span>
                    <a href="https://www.linkedin.com/in/wasif19/" className='text-lg'>LinkedIn</a>
                </div>
            </section>
        </main>
    )
}

export default Contact
