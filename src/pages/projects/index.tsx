import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectsGallery from '../components/gallery/ProjectGallery';

const index = () => {

  const projects = [
    {
      id: 1,
      type: 'Team',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/images/projects/handyChef.png',
    },
    {
      id: 2,
      type: 'Team',
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: '/assets/images/projects/pomodee.png',
    },
    {
      id: 3,
      type: 'Team',
      title: 'Project 3',
      description: 'Nulla facilisi. Aenean sed nisl et tellus maximus hendrerit eu ac nunc.',
      image: '/assets/images/projects/myDailyNote.png',
    },
    {
      id: 3,
      type: 'Solo',
      title: 'Project 3',
      description: 'Nulla facilisi. Aenean sed nisl et tellus maximus hendrerit eu ac nunc.',
      image: '/assets/images/projects/portfolioSite.png',
    },
  ];

  return <div className='bg-gray-100'>
    <Header />
    <ProjectsGallery projects={projects} />
    <Footer />
  </div>
}

export default index
