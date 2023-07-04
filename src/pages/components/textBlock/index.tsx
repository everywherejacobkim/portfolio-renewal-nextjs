import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const TextBlock = ({ text }: {
    text: string;
}) => {
        return (
            <div className="flex items-center gap-5 justify-center px-8 mb-12 md:ml-8 md:px-0 md:mb-[-5%] md:w-8/12">
                <FaRegLightbulb className="invisible md:visible text-6xl text-white -rotate-12"/>
                <p className="text-xl font-poppins font-semibold mt-20 md:text-3xl tracking-wide text-white">
                    {text}
                </p>
            </div>
        );
};

export default TextBlock;
