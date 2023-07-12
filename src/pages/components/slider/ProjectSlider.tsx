import React, { useEffect, useState } from 'react';
import ImageSliderMobile from './ImageSliderMobile';
import ImageSliderWeb2 from './ImageSliderWeb2';
import project1 from '../../../../public/assets/images/projects/handyChef.png';
import project2 from '../../../../public/assets/images/projects/pomodee.png';
import project3 from '../../../../public/assets/images/projects/myDailyNote.png';

const projectImages = [
    project1,
    project2,
  project3,
  project1,
  project2,
  project3,
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
      <ImageSliderWeb2 images={projectImages} />
    </div>
  );
};

export default ProjectSlider;
