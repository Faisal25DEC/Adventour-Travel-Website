import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { DestinationCards } from "../Shared/DestinationCards";

export const TopDestinations = () => {
  return (
    <div className="container mt-5">
      <div className="comp-heading">
        <div className="row">
          <div className="col-6">
            <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
              Top Destination
            </h6>
            <h1>
              Wanderlist for <br /> Your Wanderlust
            </h1>
          </div>
        </div>
      </div>
      <div className="cards-carousel mt-5">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide><DestinationCards/></SwiperSlide>
          <SwiperSlide><DestinationCards/></SwiperSlide>
          <SwiperSlide><DestinationCards/></SwiperSlide>
          <SwiperSlide><DestinationCards/></SwiperSlide>
          <SwiperSlide><DestinationCards/></SwiperSlide>
          <SwiperSlide><DestinationCards/></SwiperSlide>
          </Swiper>
      </div>
    </div>
  );
};
