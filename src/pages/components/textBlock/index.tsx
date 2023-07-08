import React from 'react';
import classNames from "classnames";
import { FaRegLightbulb } from 'react-icons/fa';

const TextBlock = ({ text, textColor, className }: {
    text: string;
    textColor?: string;
    className?: string;
}) => {
        return (
            <div className="flex gap-5 justify-center px-4 md:px-8 md:pt-2 md:ml-8 md:w-8/12">
                <FaRegLightbulb className={classNames(
                    "invisible md:visible text-6xl -rotate-12",
                    textColor || "text-white",
                )}
             />
                <p className={classNames(
                    "text-xl font-poppins font-semibold mt-4 mr-4 md:text-3xl tracking-wide",
                    textColor || "text-white",
                    className,
                )}>
                    {text}
                </p>
            </div>
        );
};

export default TextBlock;
