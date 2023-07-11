import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectsGallery from '../components/gallery/ProjectGallery';

const index = () => {

  const projects = [
    {
      id: 1,
      type: 'Team',
      title: 'HandyChef',
      description: 'HandyChef is a cross-platform mobile app which connects independent chefs with clients to bring a private restaurant experience to the clients’ homes at an affordable rate.',
      stack: "React Native | Node.js | Express.js | MongoDB",
      image: '/assets/images/projects/handyChef.png',
    },
    {
      id: 2,
      type: 'Team',
      title: 'Pomodee',
      description: 'Pomodee is a fun-and-network-driven timer app based on pomodoro technique which connects with others to collaborate in real-time study & work sessions.',
      stack: "React | Node.js | Express.js | MongoDB",
      image: '/assets/images/projects/pomodee.png',
    },
    {
      id: 3,
      type: 'Solo',
      title: 'My Daily Note',
      description: 'My Daily Note offers a daily to-do section, memo recording, and motivational quotes, with a user-friendly interface to help users track their activities, capture notes, and stay motivated.',
      stack: "React | PWA",
      image: '/assets/images/projects/myDailyNote.png',
    },
    {
      id: 3,
      type: 'Solo',
      title: 'My Portfolio',
      description: 'Presenting a sleek and modern web app built with Next.js, TypeScript, and Tailwind CSS, designed to showcase my self-introduction, skills, and an impressive portfolio of projects.',
      stack: "Next.js | TypeScript | Tailwind",
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
