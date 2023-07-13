import React from 'react';
import {FaFileDownload} from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="flex justify-center gap-6 mt-4 mb-[-5%]">
            <button
                className="z-50 flex gap-2 items-center bg-transparent border border-primary-50 hover:bg-white text-primary-30 hover:text-primary-400 font-bold py-2 px-4 md:py-4 md:px-6 rounded"
                onClick={() => { }}
            >
                <FaFileDownload />
                <p className="md:text-lg">Resume</p>
            </button>
            <a
                className="z-50 flex items-center bg-primary-50 border border-primary-50 hover:bg-white text-primary-300 hover:text-primary-40 font-bold py-2 px-4 md:py-4 md:px-6 rounded"
                href="#contact"
            >
                <p className="md:text-lg">Contact Me</p>
            </a>
        </div>
    )
}

export default Resume