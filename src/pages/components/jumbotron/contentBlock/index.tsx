import React from "react";
import classNames from "classnames";

const ContentBlock = ({
  title,
  description,
  fontColor,
  btnColor,
  btnTextColor,
  btnLabel,
}: {
    title: string;
    description: string;
    fontColor?: string;
    btnColor?: string;
    btnTextColor?: string;
    btnLabel?: string;
}) => {
  return (
    <div className="w-1/2">
      <div className={classNames(fontColor || "text-white")}>
        <h1 className="text-5xl tracking-wide font-bold  mb-4">{title}</h1>
        <p className="text-lg text-end mt-4">{description}</p>
      </div>
      <button
        className={classNames(
          "px-12 py-2.5 mt-8 rounded-full shadow-md",
          btnColor || "bg-black",
          btnTextColor || "text-white"
        )}
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default ContentBlock;
