import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

function Skills() {

    return (
        <div id='Skills' className='base:px-[10%] px-[4%] lg:pt-[250px] pt-[110px]'>
            <p className='text-lg text-[#ccc] text-center'>Explore my</p>
            <h2 className='text-4xl font-bold text-center'>Skills</h2>

            <section className='flex gap-5 justify-center mt-14 sm:flex-row flex-col'>
                <Frontend/>
                <Backend/>
            </section>
        </div>
    )
}

export default Skills
