import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const Carousel = ({ content }) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      pagination={true}
      modules={[EffectCards, Pagination, Autoplay]}
      autoplay={{
        delay: 3400,
        disableOnInteraction : true,
      }}
      className="greeting-wrapper"
    >
      {content.map((i) => {
        return <SwiperSlide className="dark:text-purple-800">{i}</SwiperSlide>;
      })}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default Carousel;
