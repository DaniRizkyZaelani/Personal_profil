/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const EducationItem = ({ year, title, school, duration, description }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">{year}</span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span> 
          <span className="inline-block px-2 text-sm font-semibold text-gray bg-cyan-300 rounded-md">{school}</span>
          <span className="my-1 text-sm font-normal loading-none text-stone-400">{duration}</span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">{description}</p>
      </li>
    </ol>
  );
};

export default EducationItem;
