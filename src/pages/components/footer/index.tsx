import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 px-16 pt-12 pb-6">
      <div className="flex-cols">
        <div className="flex justify-center gap-4 mb-4 text-2xl text-primary-200">
            <a href="https://www.linkedin.com/in/everywherejacobkim" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/everywherejacobkim" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.instagram.com/everywhere_jacob" target="_blank" rel="noreferrer"><ImInstagram /></a>
        </div>
        <div className="flex items-center justify-center">
          <AiOutlineCopyrightCircle />
          <p>2023 Jacob Namhyung Kim All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
