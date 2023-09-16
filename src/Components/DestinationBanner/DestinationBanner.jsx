import React, { useEffect, useState } from "react";
import bannerBackground from "../../Assets/banner-background.jpg";
import "./DestinationBanner.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getRandomProducts,
} from "../../Redux/productReducer/productActions";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

const DestinationBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //   const { randomProducts } = useSelector((state) => state.productReducer);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getRandomProducts());
  //   }, []);
  //   console.log(randomProducts);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="text-section pe-2">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
                Ready to start!
              </h6>
              <h1 className="heading">
                Book From Hundreds of
                <span style={{ color: "#0CC0DF" }}> Experiences.</span>
              </h1>
            </div>
            <div className="search-destinations d-flex">
              <div style={{ background: "#1b1b1b" }} className="col-5">
                <label style={{ background: "#1b1b1b" }} htmlFor="">
                  Location
                </label>
                <select
                  style={{ background: "#1b1b1b", color: "white" }}
                  className="cities form-select mt-1"
                >
                  <option value="default">-- Choose City --</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Andaman">Andaman & Nicobar</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
              </div>
              <div className="col-1 vl"></div>
              <div style={{ background: "#1b1b1b" }} className="col-5 ms-4">
                <label style={{ background: "#1b1b1b" }} htmlFor="">
                  Date
                </label>
                <input
                  style={{
                    background: "#1b1b1b",
                    color: "white",
                    width: "60%",
                  }}
                  type="date"
                  className="form-control mt-1"
                />
              </div>
              <button className="btn py-0">
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ color: "#000919", background: "transparent" }}
                ></i>
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 d-none d-lg-block d-md-block">
            <div className="swiper-right">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}
              >
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-9.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="img-fluid banner-swiper"
                    src="https://swiperjs.com/demos/images/nature-10.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationBanner;
