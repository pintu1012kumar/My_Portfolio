import React from 'react'
import data from '../data/data.json'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  if (!data || !Array.isArray(data.projects)) {
    return <div>Error: No projects data found.</div>;
  }

  return (
    <main id='projects' className='mobile:px-[11%] px-[7%] text-center lg:mt-[200px] mt-[150px]'>
      <p className='text-lg text-gray-600'>Browse My Recent</p>
      <h1 className='text-4xl font-bold'>Projects</h1>
      <section className='flex gap-[3rem] text-start mt-[50px] flex-wrap justify-center'>
        {
            data.projects.map((project) => {
                return <ProjectCard key={project.id} project={project}/>
            })
        }
      </section>
    </main>
  )
}

export default ProjectSection
