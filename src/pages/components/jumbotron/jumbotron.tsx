import React from "react";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import ContentBlock from "./contentBlock";

const Jumbotron = ({
  title,
  description,
  image,
  imagePosition,
  bgColor,
  fontColor,
  btnColor,
  btnTextColor,
  btnLabel,
  className,
}: {
    title: string;
    description: string;
    image: StaticImageData;
    imagePosition: "left" | "right";
    bgColor?: string;
    fontColor?: string;
    btnColor?: string;
    btnTextColor?: string;
    btnLabel?: string;
    className?: string;
}) => {
  return (
    <div className={classNames("w-full px-8 md:px-32 pb-2 mt-24 md:mt-64", bgColor || "bg-transparent", className)} id="jumbotron">
      {imagePosition === "left" && image && (
        <div className="flex flex-col md:flex-row gap-28 items-center">
          <div>
            <Image
              src={image}
              className="rounded-xl shadow-2xl"
              alt="image description"
              width={600}
              height={600}
            />
          </div>
          <ContentBlock
            title={title}
            description={description}
            fontColor={fontColor}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
            btnLabel={btnLabel}
          />
        </div>
      )}
      {imagePosition === "right" && image && (
        <div className="flex flex-col md:flex-row gap-12 md:gap-28 items-center">
          <div>
            <Image
              src={image}
              className="rounded-xl shadow-2xl"
              alt="image description"
              width={600}
              height={600}
            />
          </div>
          <ContentBlock
            title={title}
            description={description}
            fontColor={fontColor}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
            btnLabel={btnLabel}
          />
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
