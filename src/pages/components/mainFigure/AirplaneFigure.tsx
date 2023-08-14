import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AirplaneFigure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-70%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY, x: textX }}
        className="flex font-bold text-gray-50 text-5xl md:text-8xl lg:text-9xl font-rubik relative z-10 mt-30"
      >
        <div className="">DEVJACOBKIM.CO</div>
        <Image
          src="/assets/images/airplane.png"
          width={600}
          height={600}
          alt="airplane"
          className="-mt-40 md:-mt-52 -mb-48 md:-mb-44 z-50 rotate-90"
        />
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0 md:rounded-xl"
        style={{ y: backgroundY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-filter"
        >
          <source src="/assets/videos/sky-fly.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
};

export default AirplaneFigure;
