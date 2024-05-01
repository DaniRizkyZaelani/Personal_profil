/* eslint-disable no-unused-vars */
import React from "react";
import ProjectItem from "./ProjectItem";
import newsapp from "../assets/newsapp.png";
import bukapedia from "../assets/bukapedia.png";
import movieapp from "../assets/movieapp.png";
import mygram from "../assets/mygram.png";

const Project = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto m:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        repellendus consequuntur quam eius ut esse voluptatem similique
        provident, dolores ab saepe laborum eaque minima a magni ex quia dicta?
        Est.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={newsapp} title='newsapp' link='https://hactiv8-fp1-newsapp.vercel.app/' program='ReactJs' />
        <ProjectItem img={bukapedia} title='bukapedia'link='https://fp2-bukapedia.vercel.app/' program='ReactJs' />
        <ProjectItem img={movieapp} title='movieapp'link='https://fp4-movie-app.vercel.app/' program='ReactJs' />
        <ProjectItem img={mygram} title='mygram'link='https://github.com/DaniRizkyZaelani/Assignment_2_INJS_Hacktivate' program='NodeJs' />
      </div>
    </div>
  );
};

export default Project;
