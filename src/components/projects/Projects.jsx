import React from 'react';
import data from '../../data/data.json';
import ProjectCard from './ProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  if (!data || !Array.isArray(data.projects)) {
    return <div>Error: No projects data found.</div>;
  }

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <main id="Projects" className="mobile:px-[9%] px-[4%] text-center lg:mt-[200px] mt-[150px] -z-20">
      <p className="text-lg text-[#ccc]">Browse My Recent</p>
      <h1 className="text-4xl font-bold">Projects</h1>
      <Slider {...settings}>
        {data.projects.map((project) => (
          <div key={project.id} className="px-2 mt-10">
            <div className="h-full">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default Projects;
