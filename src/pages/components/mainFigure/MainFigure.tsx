import React from "react";
import Image from "next/image";
import { BsKeyboardFill, BsFillMouse2Fill, BsCloudFog2 } from "react-icons/bs";
import { FaReact, FaCameraRetro } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { ImAirplane } from "react-icons/im";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import mainImage from "../../../../public/assets/images/main-me.jpg";
import Resume from "../buttons/Resume";

const MainFigure = () => {
  return (
    <>
      <Resume />
      <div style={{ transform: "translateY(5%)" }}>
        <Image
          src={mainImage}
          alt="me"
          width={550}
          height={550}
          className="rounded-full shadow-lg"
          style={{
            filter: "brightness(90%) contrast(95%) grayscale(10%)",
          }}
        />
      </div>
      <div className=" text-white ml-16 md:ml-10">
        <BsKeyboardFill
          className="text-white"
          size="5rem"
          style={{
            transform: "rotate(-50deg) translate(6.5rem, -29.2rem)",
          }}
        />
        <BsFillMouse2Fill
          className="text-white"
          size="3rem"
          style={{
            transform: "rotate(-50deg) translate(6.9rem, -27.5rem)",
          }}
        />
        <FaReact
          className="reactLogo"
          size="4rem"
          style={{
            transform: "translate(-11.5rem, -25.8rem)",
          }}
        />
        <SiTypescript
          className="jsLogo"
          size="2.5rem"
          style={{
            transform: "rotate(-45deg) translate(17rem, -38rem)",
          }}
        />
        <SiTailwindcss
          className=""
          size="2rem"
          style={{
            transform: "translate(-10.3rem, -34.5rem)",
          }}
        />
      </div>
      <div className="text-white mt-[-2rem] md:mt-[0rem] md:ml-20">
        <ImAirplane
          className="airplane"
          size="4rem"
          style={{
            transform: "rotate(-15deg) translate(21rem, -30.4rem)",
          }}
        />
        <BsCloudFog2
          className="airplane text-3xl"
          style={{
            transform: "translate(16.3rem, -36.8rem)",
          }}
        />
        <FaCameraRetro
          className="camera"
          size="3rem"
          style={{
            transform: "rotate(43deg) translate(-18rem, -45.5rem)",
          }}
        />
        <p
          className="font-kristi text-5xl font-bold"
          style={{
            transform: "rotate(-41deg) translate(25.7rem, -16rem)",
          }}
        >
          develoPer Kim
        </p>
      </div>
      <div className="invisible md:visible flex flex-col items-center gap-12 absolute right-16 bottom-12">
        <p className="rotate-90 text-white">Scroll Down</p>
        <a href="#jumbotron">
          <BsFillArrowDownCircleFill className="text-white w-10 h-10 animate-bounce mt-4 mr-1" />
        </a>
      </div>
    </>
  );
};

export default MainFigure;
