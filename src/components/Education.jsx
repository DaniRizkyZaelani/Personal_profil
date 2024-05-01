/* eslint-disable no-unused-vars */
import React from "react";
import EducationItem from "./EducationItem";

const data = [
  {
    year: "2017 - 2020",
    title: "Teknik Komputer Jaringan",
    school: "SMK Wirakarya 1 Ciparay",
    duration: "3 years",
    description:
      "Lulusan SMK TKJ adalah individu yang mumpuni, siap berkarya dan mewarnai dunia digital. Keahlian mereka yang luas, keterampilan yang beragam, dan semangat belajar yang tinggi menjadikan mereka aset berharga di era digital yang penuh dengan peluang.",
  },
  {
    year: "2020 - Sekarang",
    title: "Informatika",
    school: "Universitas Informatika Dan Bisnis Indonesia",
    duration: "4 years",
    description:
      "UNIBI adalah Perguruan Tinggi yang telah Terakreditasi oleh BAN-PT SK No. 225/SK/BAN-PT/Akred/PT/IV/2019 di bawah naungan Yayasan Ganesha Nusantara",
  },
];

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Education
      </h1>
      {data.map((item, idx) => (
        <EducationItem
          key={idx}
          year={item.year}
          title={item.title}
          school={item.school}
          duration={item.duration}
          description={item.description}
        />
      ))}
    </div>

  );
};

export default Education;
