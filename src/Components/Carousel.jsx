import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TiltCard from "../Components/TiltCard.jsx";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Carousel = ({ content }) => {
  return (
    <Swiper
      modules={[Navigation,Pagination]}
      effect={"coverflow"}
      grabCursor
      pagination
      loop
      centeredSlides
      className="greeting-wrapper"
    >
      {content.map((i) => {
        return (
          <SwiperSlide className="greeting-slides">
            <TiltCard text={i} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
