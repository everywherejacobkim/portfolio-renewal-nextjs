import React, { useEffect, useState } from 'react';
import ImageSliderMobile from './ImageSliderMobile';
import ImageSliderWeb from './ImageSliderWeb';
import project1 from '../../../../public/assets/images/projects/handyChef.png';
import project2 from '../../../../public/assets/images/projects/pomodee.png';
import project3 from '../../../../public/assets/images/projects/bcspcaRenewal.png';
import project4 from '../../../../public/assets/images/projects/myDailyNote.png';
import project5 from '../../../../public/assets/images/projects/portfolioPage.png';

const projectImages = [
  project1,
  project2,
  project3, 
  project4,
  project5,
  ]

const ProjectSlider = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    setIsMobileView(window.innerWidth <= 768);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if (isMobileView) {
    return (
      <div className="flex flex-col md:flex-row gap-12">
        <div className="">
          <h1 className="text-2xl md:text-3xl text-center text-primary-200 font-bold bg-blue-100 rounded-t-xl py-1">
            Project With Team
          </h1>
          <ImageSliderMobile images={projectImages} />
        </div>
        <div className="">
          <h1 className="text-2xl md:text-3xl text-center text-primary-200 font-bold bg-red-100 rounded-t-xl py-1">
            Individual Project
          </h1>
          <ImageSliderMobile images={projectImages} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <ImageSliderWeb images={projectImages} />
    </div>
  );
};

export default ProjectSlider;
