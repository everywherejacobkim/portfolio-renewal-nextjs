import React from 'react';
import Image from "next/image";
import { BsKeyboardFill, BsFillMouse2Fill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { ImAirplane } from 'react-icons/im';
import mainImage from '../../../../public/assets/images/main-me.png';
import Resume from '../buttons/Resume';

type Props = {}

const index = (props: Props) => {
  return <>
    <Resume />
      <div className='flex w-[30%] mt-2 justify-center drop-shadow-2xl rounded-b-full bg-gradient-to-b from-transparent to-primary-50'>
          <Image
            src={mainImage}
            alt="me"
            width={350}
            height={350}
              style={{
                  filter: "brightness(85%) contrast(95%) grayscale(15%)",
                  transform: "translateX(-2%) translateY(9.5%)",
              }}
          />
              </div>
        <div className=" text-white">
              <BsKeyboardFill className="text-white" size="5rem" style={{
                transform: "rotate(-50deg) translate(-20.4rem, -13.5rem)",
            }}/>
            <BsFillMouse2Fill className="text-white" size="3rem" />
            <FaReact className="reactLogo" size="3rem" />
            <SiJavascript className="jsLogo" size="2rem" />
        </div>
        <div className=' text-white'>
            <ImAirplane className='airplane' size="2.5rem" />
            <p className='meTitle-text'>develoPer Kim</p>
        </div>

        </>
}

export default index