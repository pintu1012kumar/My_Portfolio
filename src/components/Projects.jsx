import React from 'react'
import data from '../data/data.json'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <main id='projects' className='md:px-[10%] px-[4%] lg:pt-[220px] pt-[150px] overflow-x-hidden'>
            <section className='text-center font-sans'>
                    <p className='text-gray-500'>Browse My Recent</p>
                    <h1 className='text-3xl font-bold'>Projects</h1>
            </section>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-14'>
                {
                    data.projects.map((project) => (
                        <div key={project.id} className='h-full'>
                            <ProjectCard project={project}/>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Projects
