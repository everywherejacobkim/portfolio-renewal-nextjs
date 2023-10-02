import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="w-full flex justify-center gap-6 mt-1">
      <a
        className="z-30 flex gap-2 items-center bg-transparent border border-primary-50 hover:bg-white text-primary-30 hover:text-primary-400 font-bold py-2 px-4 md:py-4 md:px-6 rounded"
        href="/assets/pdf/Resume.pdf"
        download="Resume.pdf"
      >
        <FaFileDownload />
        <p className="md:text-lg">Resume</p>
      </a>
      <a
        className="z-30 flex items-center bg-primary-50 border border-primary-50 hover:bg-white text-primary-300 hover:text-primary-40 font-bold py-2 px-4 md:py-4 md:px-6 rounded"
        href="#contact"
      >
        <p className="md:text-lg">Contact Me</p>
      </a>
    </div>
  );
};

export default Resume;
