import React from 'react'

function Backend() {
  return (
    <div className='border rounded-lg sm:w-full w-10/12 mx-auto xl:w-[40%] bg-[#fff]'>
      <h2 className='text-2xl font-semibold text-gray-500 text-center pt-6'>Backend</h2>

      <section className='flex justify-between gap-5 py-8 xl:px-[4rem] mobile:px-[2rem] px-4'>
        {/* left side */}
        <div className='space-y-8'>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Nodejs</h2>
              <span className='text-[.9rem] text-gray-600'>Basic</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>MongoDB</h2>
              <span className='text-[.9rem] text-gray-600'>Intermediate</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Expressjs</h2>
              <span className='text-[.9rem] text-gray-600'>Intermediate</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='space-y-8'>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Postman</h2>
              <span className='text-[.9rem] text-gray-600'>Intermediate</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Cloudinary</h2>
              <span className='text-[.9rem] text-gray-600'>Intermediate</span>
            </div>
          </div>
          <div className='flex items-start gap-1.5'>
            <i className='bx bx-badge-check text-xl'></i>
            <div>
              <h2 className='font-semibold'>Multer</h2>
              <span className='text-[.9rem] text-gray-600'>Intermediate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Backend
