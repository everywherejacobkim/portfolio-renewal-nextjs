import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const typedText = ["Front-end Developer",1000, "React Developer",1500, "React Native Dev.",1000, "UI Developer",1000];

  return (
    <header className="bg-gray-100 p-2">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <Link href="/" className="shadow-md py-2 px-4 rounded-sm bg-white ml-8 mr-2">
          <TypeAnimation
            sequence={typedText}
            className="text-primary-200 text-2xl font-bold"
            wrapper="h2"
            repeat={Infinity}
          />
          <p className="text-gray-900 text-2xl font-bold">Jacob Namhyung Kim</p>
        </Link>
        <button className="block md:hidden" onClick={toggleMenu}>
          {isExpanded ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
        <ul
          className={`${
            isExpanded ? "block" : "hidden"
          } md:flex md:items-center md:justify-end md:flex-1 text-lg mt-10 gap-4 ml-4 mr-2`}
        >
          <li>
            <Link href="/about" className="px-2 py-1 block hover:text-gray-500">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/skills" className="px-2 py-1 block hover:text-gray-500">
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="px-2 py-1 block hover:text-gray-500"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-2 py-1 block hover:text-gray-500"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
