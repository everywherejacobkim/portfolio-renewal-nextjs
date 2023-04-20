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
}) => {
  return (
    <div className={classNames("w-full p-32", bgColor || "bg-transparent")}>
      {imagePosition === "left" && image && (
        <div className="flex gap-28 items-center">
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
        <div className="flex gap-28 items-center">
          <ContentBlock
            title={title}
            description={description}
            fontColor={fontColor}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
            btnLabel={btnLabel}
          />
          <div>
            <Image
              src={image}
              className="rounded-xl shadow-2xl"
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
