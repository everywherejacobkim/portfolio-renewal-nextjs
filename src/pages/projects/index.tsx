import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectsGallery from "../components/gallery/ProjectsGallery";
import projects from "./projects.json";

const index = () => {
  return (
    <div className="bg-white">
      <Header />
      <ProjectsGallery projects={projects} />
      <Footer />
    </div>
  );
};

export default index;
