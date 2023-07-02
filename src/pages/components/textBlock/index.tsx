import React from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

const TextBlock = ({ text }: {
    text: string;
}) => {
        return (
        <div className="px-8 md:px-0 md:mb-[-7%] md:w-8/12">
            <p className="text-xl font-poppins font-semibold mt-20 md:text-3xl text-white">
                {text}
            </p>
        </div>
        );
};

export default TextBlock;
