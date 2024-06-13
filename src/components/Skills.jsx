import React from 'react'

function Skills() {
    return (
        <main id='skills' className='md:px-[10%] px-[4%] lg:pt-[220px] pt-[150px] overflow-x-hidden'>
            <section className='text-center font-sans'>
                <p className='text-gray-500'>Explore my</p>
                <h1 className='text-3xl font-bold'>Skills</h1>
            </section>

            <section className='flex md:flex-row flex-col justify-center mt-14 gap-[5rem]' data-aos="zoom-out-right">
                <div className='border rounded-xl w-full bg-card border-cardBorder'>
                    <h2 className='text-center text-2xl mt-6 font-medium'>Frontend</h2>
                    <div className='flex justify-between gap-5 py-8 lg:px-[5rem] mwidth:px-8 px-[3%] transition-all duration-200'>
                        {/* left side */}
                        <div className='space-y-8'>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>HTML</h2>
                                <span className='text-[.9rem] text-gray-400'>Advance</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>CSS</h2>
                                <span className='text-[.9rem] text-gray-400'>Advance</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>JavaScript</h2>
                                <span className='text-[.9rem] text-gray-400'>Advance</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className='space-y-8'>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Git</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>React</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Tailwind</h2>
                                <span className='text-[.9rem] text-gray-400'>Advance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border rounded-xl w-full bg-card border-cardBorder' data-aos="zoom-out-left">
                    <h2 className='text-center text-2xl mt-6 font-medium'>Backend</h2>
                    <div className='flex justify-between gap-5 py-8 lg:px-[5rem] mwidth:px-8 px-[3%] transition-all duration-200'>
                        {/* left side */}
                        <div className='space-y-8'>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Nodejs</h2>
                                <span className='text-[.9rem] text-gray-400'>Basic</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>MongoDB</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Expressjs</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className='space-y-8'>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Postman</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Cloudinary</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                            <div className='flex items-start gap-1.5'>
                                <i className='bx bx-badge-check text-xl'></i>
                                <div>
                                <h2>Multer</h2>
                                <span className='text-[.9rem] text-gray-400'>Intermediate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Skills
