import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getRandomProducts } from "../../Redux/productReducer/productActions";

export const TopDestinations = () => {
  const { randomProducts } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomProducts());
  }, []);

  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <div className="comp-heading">
        <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
          Top Destination
        </h6>
        <h1>
          Wanderlist for <br /> Your Wanderlust
        </h1>
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
          {randomProducts.map((randomProduct) => {
            return (
              <SwiperSlide>
                <DestinationCards
                  onProduct={false}
                  product={randomProduct}
                  onBookings={false}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
