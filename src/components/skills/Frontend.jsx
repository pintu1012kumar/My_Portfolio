import React from 'react'

function Frontend() {
  return (
    <div className='border border-[#a2a2a2] rounded-lg sm:w-full w-10/12 mx-auto xl:w-[40%] bg-[#353535] text-white' data-aos="fade-left"> 
      <h2 className='text-2xl font-semibold text-center pt-6'>Frontend</h2>

      <section className='flex justify-between gap-5 py-8 xl:px-[4rem] mobile:px-[2rem] px-4'>
        {/* left side */}
        <div className='space-y-8'>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>HTML</h2>
              <span className='text-[.9rem] text-[#ccc]'>Advance</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>CSS</h2>
              <span className='text-[.9rem] text-[#ccc]'>Advance</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>JavaScript</h2>
              <span className='text-[.9rem] text-[#ccc]'>Advance</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='space-y-8'>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Git</h2>
              <span className='text-[.9rem] text-[#ccc]'>Intermediate</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>React</h2>
              <span className='text-[.9rem] text-[#ccc]'>Intermediate</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Tailwind</h2>
              <span className='text-[.9rem] text-[#ccc]'>Advance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Frontend
