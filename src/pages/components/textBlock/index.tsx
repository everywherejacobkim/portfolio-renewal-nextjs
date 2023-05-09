import React from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

const TextBlock = ({ text }: {
    text: string;
}) => {
        return (
        <div className="w-2/5 md:translate-y-44 md:translate-x-96">
            <p className="text-lg text-white">
                {text}
            </p>
        </div>
        );
};

export default TextBlock;
