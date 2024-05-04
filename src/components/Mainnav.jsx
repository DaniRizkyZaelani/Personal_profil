/* eslint-disable no-unused-vars */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div id="main">
      <img
        className="w-full h-screen ] object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1650219814677-38ffcc930a3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Hai, Saya Dani Rizky Zaelani
          </h1>
          <h2 className="flex sm:text-2xl text-2xl text-gray-800">
            <TypeAnimation
              sequence={[
                "Student",
                2000,
                "Anime Lovers",
                2000,
                "Gaming Enjoyers",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <h3 className="text-black text-lg pt-4 text-justify ml-4 mr-4">
            Saya adalah mahasiswa Informatika di universitas Informatika dan
            Bisnis Indonesia yang antusias dan bersemangat untuk mempelajari dan
            mengembangkan keterampilan saya di bidang pengembangan front-end dan
            back-end. Fokus utama saya adalah pada pengembangan menggunakan
            react dan Node.js, sebuah platform yang saya temukan menarik dan sangat
            bermanfaat dalam menciptakan solusi efisien dan skala besar.
          </h3>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaFacebook className="cursor-pointer" size={20} onClick={() => handleIconClick('https://www.facebook.com/danirizkyzaelani.zaelani/')}  />
            <FaInstagram className="cursor-pointer" size={20} onClick={() => handleIconClick('https://www.instagram.com/white_eyes_blue_dragon_/?hl=en')} />
            <FaGithub className="cursor-pointer" size={20} onClick={() => handleIconClick('https://github.com/danirizkyzaelanim')} />
            <FaLinkedin className="cursor-pointer" size={20} onClick={() => handleIconClick('https://www.linkedin.com/in/dani-rizky/')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
