import React from 'react';

function ProjectCard({ project }) {
  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className="text-start mx-auto border border-[#a2a2a2] rounded-xl bg-[#353535] text-white p-2" data-aos="fade-down">
      <div className="relative group">
        <img
          src={project.image}
          className="rounded-lg w-full aspect-video h-[400px] cursor-pointer"
          alt={project.title}
        />
        <div className="text-desc absolute bottom-0 w-full rounded-b-md p-3 h-[80%] flex flex-col justify-end pb-8 opacity-0 invisible transition-opacity duration-1000 ease-in-out group-hover:opacity-100 group-hover:visible">
          <h1 className="text-2xl font-medium">{project.title}</h1>
          <p className="py-3">{project.description}</p>

          <div className="project-card-footer flex gap-8 items-center pt-3">
            <button
              className="p-2 border-[1.5px] border-[#ccc] bg-[#222] rounded-3xl w-full transition-all duration-300 hover:bg-[#d1d1d1] hover:text-black"
              onClick={() => redirectToLink(project.gitUrl)}
            >
              Github
            </button>
            <button
              className="p-2 border-[1.5px] border-[#ccc] bg-[#d1d1d1] text-black rounded-3xl w-full transition-all duration-300 hover:bg-[#222] hover:text-white"
              onClick={() => redirectToLink(project.demoUrl)}
            >
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
