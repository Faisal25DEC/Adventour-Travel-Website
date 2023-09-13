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
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

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
      <div className="destination-banner">
        {/* </div> */}
        <div className="row">
          <div className="col-8">
            <div className="banner-search">
              <div className="destination-input">
                <label htmlFor="">Search Places</label>
                <input placeholder="places" type="text" />
              </div>
              <div className="state-input">
                <label htmlFor="">Search State</label>
                <input placeholder="state" type="text" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, molestias.
                </p>
                <br />
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="img-fluid" src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationBanner;
