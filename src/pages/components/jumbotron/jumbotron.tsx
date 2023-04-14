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
}: {
    title: string;
    description: string;
    image: StaticImageData;
    imagePosition: "left" | "right";
    bgColor?: string;
    fontColor?: string;
    btnColor?: string;
    btnTextColor?: string;
}) => {
  return (
    <div className={classNames("w-full p-32", bgColor || "bg-transparent")}>
      {imagePosition === "left" && image && (
        <div className="flex gap-28 items-center">
          <div>
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
          <ContentBlock
            title={title}
            description={description}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
          />
        </div>
      )}
      {imagePosition === "right" && image && (
        <div className="flex gap-28 items-center">
          <ContentBlock
            title={title}
            description={description}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
          />
          <div>
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
