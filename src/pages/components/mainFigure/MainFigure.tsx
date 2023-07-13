import React from 'react';
import Image from "next/image";
import { BsKeyboardFill, BsFillMouse2Fill, BsCloudFog2, BsCamera } from 'react-icons/bs';
import { FaReact, FaCameraRetro } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { ImAirplane } from 'react-icons/im';
import { BsFillArrowDownCircleFill } from 'react-icons/bs'; 
import mainImage from '../../../../public/assets/images/main-me.png';
import Resume from '../buttons/Resume';

type Props = {}

const MainFigure = (props: Props) => {
  return <>
        <Resume />
        <div className='flex mt-2 justify-center drop-shadow-2xl rounded-b-full bg-gradient-to-b from-transparent to-primary-50'>
            <Image
              src={mainImage}
              alt="me"
              width={400}
              height={400}
                style={{
                    filter: "brightness(85%) contrast(95%) grayscale(15%)",
                    transform: "translateX(-2%) translateY(9.5%)",
                }}
            />
        </div>
        <div className=" text-white ml-16 md:ml-10">
              <BsKeyboardFill className="text-white" size="5rem" style={{
                transform: "rotate(-50deg) translate(90%, -19.7rem)",
            }}/>
            <BsFillMouse2Fill className="text-white" size="3rem" style={{
              transform: "rotate(-50deg) translate(9.5rem, -25.5rem)"
            }}/>
            <FaReact className="reactLogo" size="4rem" style={{
                transform: "translate(-11rem, -31.8rem)",
            }}/>
            <SiTypescript className="jsLogo" size="2.5rem" style={{
                transform: "rotate(-45deg) translate(18.5rem, -36.5rem)",
            }}/>
            <SiTailwindcss className="" size="2rem" style={{
              transform: "translate(-10.3rem, -33.8rem)"
            }}/>
        </div>
        <div className='text-white mt-[-2rem] md:mt-[0rem] md:ml-20'>
            <ImAirplane className='airplane' size="3rem" style={{
                transform: "rotate(-45deg) translate(33rem, -19rem)",
            }}/>
            <BsCloudFog2  className='hidden md:block airplane' size="2.5rem" style={{
                transform: "translate(13.7rem, -39.9rem)",
            }}/>
            <FaCameraRetro className='hidden md:block camera' size="2rem" style={{
                transform: "rotate(35deg) translate(-15rem, -45rem)",
            }}/>
            <p className="hidden md:block font-kristi text-5xl font-bold" style={{
                transform: "rotate(-45deg) translate(37rem, -22rem)",
            }}>develoPer Kim</p>
      </div>
      <div className='invisible md:visible flex flex-col items-center gap-12 absolute right-16 bottom-12'>
        <p className='rotate-90 text-white'>Scroll Down</p>
        <a href="#jumbotron">
          <BsFillArrowDownCircleFill className="text-white w-10 h-10"/>
        </a>
      </div>
  </>
}

export default MainFigure