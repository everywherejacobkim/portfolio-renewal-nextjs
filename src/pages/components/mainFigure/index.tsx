import React from 'react';
import Image from "next/image";
import Jumbotron from '../jumbotron/jumbotron';
import { BsKeyboardFill, BsFillMouse2Fill, BsCloudFog2, BsCamera } from 'react-icons/bs';
import { FaReact, FaCameraRetro } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { ImAirplane } from 'react-icons/im';
import mainImage from '../../../../public/assets/images/main-me.png';
import JumbotronImage from '../../../../public/assets/images/j2.jpg';
import Resume from '../buttons/Resume';

type Props = {}

const index = (props: Props) => {
  return <>
    <Resume />
      <div className='flex mt-2 justify-center drop-shadow-2xl rounded-b-full bg-gradient-to-b from-transparent to-primary-50'>
          <Image
            src={mainImage}
            alt="me"
            width={360}
            height={360}
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
          <BsCloudFog2  className='airplane' size="2.5rem" style={{
              transform: "translate(13.7rem, -39.9rem)",
          }}/>
          <FaCameraRetro className='camera' size="2rem" style={{
              transform: "rotate(35deg) translate(-15rem, -45rem)",
          }}/>
          <p className="font-kristi text-5xl font-bold" style={{
              transform: "rotate(-45deg) translate(37rem, -22rem)",
          }}>develoPer Kim</p>
      </div>
      <Jumbotron title="YOU CAN’T GO BACK AND CHANGE THE BEGINNING BUT, YOU CAN START WHERE YOU ARE AND CHANGE THE ENDING" description="- C.S. Lewis"  image={JumbotronImage} imagePosition="right" fontColor="text-red-100" btnLabel='Back home' btnColor="bg-blue-300" btnTextColor='text-blue-900' />
  </>
}

export default index