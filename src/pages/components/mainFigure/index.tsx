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

const index = (props: Props) => {
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
    
    <div className='invisible md:visible flex flex-col items-center gap-12 absolute right-16 bottom-12'>
      <p className='rotate-90 text-white'>Scroll Down</p>
      <a href="#jumbotron">
        <BsFillArrowDownCircleFill className="text-white w-10 h-10"/>
      </a>
    </div>
  </>
}

export default index