import React, { useState } from 'react';
import Image, { StaticImageData } from "next/image";
import { BsAirplaneFill } from 'react-icons/bs';

const ImageSliderMobile = ({ images }: { images: StaticImageData[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto">
      <Image src={images[currentImageIndex]} alt="Slider" className="h-128 w-full object-cover rounded-b-xl" />

      <div className="absolute top-1/2 left-0 flex justify-between w-full">
        <button
          className="bg-primary-300 hover:bg-red-500 mx-2 text-white font-bold py-3 px-6 rounded-xl"
          onClick={previousImage}
        >
          <BsAirplaneFill className="text-xl rotate-[270deg]" />
        </button>
        <button
          className="bg-primary-300 hover:bg-red-500 mx-2 text-white font-bold py-3 px-6 rounded-xl"
          onClick={nextImage}
        >
          <BsAirplaneFill className="rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderMobile;
