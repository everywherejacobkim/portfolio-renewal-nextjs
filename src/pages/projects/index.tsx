import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectsGallery from "../components/gallery/ProjectsGallery";

const index = () => {
  const projects = [
    {
      id: 1,
      type: "Team",
      title: "Pomodee",
      description:
        "Pomodee is a fun-and-network-driven timer app based on pomodoro technique which connects with others to collaborate in real-time study & work sessions.",
      stack: "React | Node.js | Express.js | MongoDB",
      image: "/assets/images/projects/pomodee.png",
      link: "https://63c9adbfe71a072600c4d8af--charming-chebakia-f3ec0c.netlify.app",
      code: "https://github.com/team1-pomodee/pomodo-client",
    },
    {
      id: 2,
      type: "Team",
      title: "HandyChef",
      description:
        "HandyChef is a cross-platform mobile app which connects independent chefs with clients to bring a private restaurant experience to the clients’ homes at an affordable rate.",
      stack: "React Native | Node.js | Express.js | MongoDB",
      image: "/assets/images/projects/handyChef5.jpg",
      link: "https://master--handychef.netlify.app",
      code: "https://github.com/Dwayne01/handy-chef",
    },
    {
      id: 3,
      type: "Team",
      title: "BCSPCA Website Renewal",
      description:
        "This project involves enhancing the BC SPCA website by redesigning its user interface and improving functionality to provide a visually appealing, intuitive, and seamless user experience.",
      stack: "Next.js | TypeScript | Tailwind | MapBox | Stripe",
      image: "/assets/images/projects/bcspcaRenewal.png",
      link: "https://bc-spca-renewal.netlify.app",
      code: "https://github.com/everywherejacobkim/project-bc-spca-renewal",
    },
    {
      id: 4,
      type: "Solo",
      title: "Urban Teescape | E-commerce Web",
      description:
        "Explore modern e-commerce demo showcasing product pages, cart functionality, and secure payments. Discover trendy T-shirts shopping website, powered by Next.js, Sanity, and Stripe.",
      stack: "Next.js | Sanity | Stripe",
      image: "/assets/images/projects/eCommerce.png",
      link: "https://urban-tee-scape.netlify.app",
      code: "https://github.com/everywherejacobkim/ecommerce-website-nextjs-sanity-stripe",
    },
    {
      id: 5,
      type: "Solo",
      title: "My Daily Note",
      description:
        "My Daily Note offers a daily to-do section, memo recording, and motivational quotes, with a user-friendly interface to help users track their activities, capture notes, and stay motivated.",
      stack: "React | PWA",
      image: "/assets/images/projects/myDailyNote.png",
      link: "https://my-daily-note.netlify.app",
      code: "https://github.com/everywherejacobkim/myDailyNote-web-app-react",
    },
    {
      id: 6,
      type: "Solo",
      title: "My Portfolio",
      description:
        "Presenting a sleek and modern web app built with Next.js, TypeScript, and Tailwind CSS, designed to showcase my self-introduction, skills, and an impressive portfolio of projects.",
      stack: "Next.js | TypeScript | Tailwind",
      image: "/assets/images/projects/portfolioPage.jpg",
      link: "https://devjacobkim.co",
      code: "https://github.com/everywherejacobkim/portfolio-renewal-nextjs",
    },
    {
      id: 7,
      type: "Solo",
      title: "Binary Tree Parser & Visualizer",
      description:
        "A TypeScript and React-based single-page application for parsing and visualizing binary tree data structures, with a user-friendly interface to help users understand the concept of binary trees.",
      stack: "React | TypeScript | MobX",
      image: "/assets/images/projects/binaryTree.png",
      link: "https://binary-tree-parser.netlify.app",
      code: "https://github.com/everywherejacobkim/parsing-tree-react-typescript",
    },
    {
      id: 8,
      type: "Solo",
      title: "Hope Village Sample Website",
      description:
        "The Hope Village sample website offers a user-friendly and theme-based interface that enables customers to explore a variety of sesame oil products.",
      stack: "React | Bootstrap | Tailwind",
      image: "/assets/images/projects/hopeVillage.jpg",
      link: "https://hope-village-sample.netlify.app",
      code: "https://github.com/everywherejacobkim/hope-village-sample-website",
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      <ProjectsGallery projects={projects} />
      <Footer />
    </div>
  );
};

export default index;
