import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageSliderWeb2 = ({ images }: { images: StaticImageData[] }) => {
  return (
    <Link href="/projects">
      <div className="w-[80%] mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {images &&
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  width={750}
                  height={500}
                  alt="Project Image"
                  className="rounded-xl"
                />
              </SwiperSlide>
            ))}

          <div className="">
            <div className="swiper-button-prev slider-arrow bg-primary-30 p-8 rounded-xl border-4 border-blue-500"></div>
            <div className="swiper-button-next slider-arrow  bg-primary-30 p-8 rounded-xl border-4 border-blue-500 animate-swing z-50"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </Link>
  );
};

export default ImageSliderWeb2;
