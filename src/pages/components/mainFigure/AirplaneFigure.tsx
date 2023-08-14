import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AirplaneFigure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY, x: textX }}
        className="font-bold text-gray-50 text-5xl md:text-8xl lg:text-9xl font-rubik relative z-10 mt-40 md:mt-30"
      >
        DEVJACOBKIM.CO
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0 md:rounded-xl"
        style={{
          backgroundImage: `url(/assets/images/sky-bg.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          filter: "grayscale(25%)",
          y: backgroundY,
        }}
      />
    </div>
  );
};

export default AirplaneFigure;
