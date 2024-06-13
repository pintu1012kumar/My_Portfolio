import React from 'react';

function ProjectCard({ project }) {
    const redirectToLink = (link) => {
        window.location.href = link;
      };
    return (
        <div className='border rounded-xl p-3 bg-card flex flex-col h-full' data-aos="zoom-in">
            <img src={project.image} className='rounded-lg' />
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-medium text-[#cfb43e]'>{project.title}</h2>
                    <div className='flex items-center gap-3.5 text-2xl mt-auto'>
                        <span className='cursor-pointer hover:scale-110 transition-all duration-300' onClick={() => redirectToLink(project.demoUrl)}>
                            <ion-icon name="open-outline"></ion-icon>
                        </span>
                        <span className='cursor-pointer hover:scale-110 transition-all duration-300' onClick={() => redirectToLink(project.gitUrl)}>
                            <ion-icon name="logo-github"></ion-icon>
                        </span>
                    </div>
                </div>
                <p className='mt-2'>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
