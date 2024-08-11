import React from "react";
import { FaAward, FaUserGraduate } from "react-icons/fa6";

function About() {
  return (
    <main
      id="about"
      className="md:px-[10%] px-[4%] lg:pt-[220px] pt-[150px] overflow-x-hidden"
    >
      <section className="text-center font-sans">
        <p className="text-gray-500">Get To Know More</p>
        <h1 className="text-3xl font-bold">About Me</h1>
      </section>

      <section className="mt-10">
        <div className="flex md:flex-row flex-col gap-8 items-center">
          <div
            className="w-full border-[1.7px] border-cardBorder rounded-xl bg-card text-gray-100 text-center p-4"
            data-aos="zoom-in-right"
          >
            <FaAward className="mx-auto text-3xl" />
            <h2 className="text-2xl font-sans mb-1">Experience</h2>
            <p>1+ years</p>
            <p>MERN Stack Development</p>
          </div>
          <div
            className="w-full border-[1.7px] border-cardBorder rounded-xl bg-card text-gray-100 text-center p-4"
            data-aos="zoom-in-left"
          >
            <FaUserGraduate className="mx-auto text-3xl" />
            <h2 className="text-2xl font-sans mb-1">Education</h2>
            <p>Btech</p>
            <p>Computer Science </p>
          </div>
        </div>
        <p className="mt-10">
          "Hi, I'm Pintu, a MERN stack developer from India. I create clean and
          elegant code to build smooth user experiences, adding creativity and
          precision to every project."
        </p>
      </section>
    </main>
  );
}

export default About;
