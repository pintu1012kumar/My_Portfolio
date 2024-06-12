import React from 'react'

function ProjectCard({project}) {

  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className='text-start mx-auto border rounded-xl bg-[#fff] p-4'>
      <img src={project.image} className='rounded-lg aspect-square'/>
      <div className='pt-3'>
        <h1 className='text-2xl font-medium'>{project.title}</h1>
        <p className='py-3'>{project.description.split(' ').slice(0, 3).join(' ')}...</p>
      </div>
      <div className='flex gap-8 items-center pt-3'>
        <button 
          className='p-2 border-[1.5px] border-gray-400 rounded-3xl w-full transition-all duration-300 hover:bg-[#333] hover:text-white'
          onClick={() => redirectToLink(project.gitUrl)}
        >
            Github
        </button>
        <button
          className='p-2 border-[1.5px] border-gray-400 rounded-3xl w-full transition-all duration-300 hover:bg-[#333] hover:text-white'
          onClick={() => redirectToLink(project.demoUrl)}
        >
            Demo
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
