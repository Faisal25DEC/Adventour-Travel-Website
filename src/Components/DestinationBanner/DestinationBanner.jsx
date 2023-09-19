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
  const { randomProducts } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomProducts());
  }, []);
  console.log(randomProducts);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="text-section mt-5 pe-2">
              <h6 style={{ color: "#0CC0DF", letterSpacing: "2px" }}>
                Ready to start!
              </h6>
              <h1 className="heading">
                Book From Hundreds of
                <span style={{ color: "#0CC0DF" }}> Experiences.</span>
              </h1>
            </div>
            {/* <div className="search-destinations d-flex">
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
            </div> */}
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
                {randomProducts?.map((product) => {
                  return (
                    <SwiperSlide>
                      <div className="img-contain">
                        <img
                          className="img-fluid banner-swiper"
                          style={{ width: "100%", height: "25rem" }}
                          src={product.images}
                          alt="Location-Image"
                        />

                        <p className="position-absolute bottom-0 text-center img-text p-2 mb-0">
                          <h2>{product.name}</h2>
                          {product.info.substring(0, 270) + "..."}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationBanner;
