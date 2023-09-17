import React, { useEffect } from "react";
import "./ProductStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "./../../Redux/productReducer/productReducer";
import { getSingleProduct } from "../../Redux/productReducer/productActions";
import { useParams } from "react-router";
import { duration } from "@mui/material";
import { getPlaceImages } from "../../Utils/unplash/unplash";

export const ProductSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentProductImages, setCurrentProductImages] = useState([]);
  const [adultCount, setAdultCount] = useState(0);
  const { id } = useParams();
  const { currentProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const getCurrentProductImages = async () => {
    const placeImages = await getPlaceImages(currentProduct.name)();
    setCurrentProductImages(placeImages);
  };
  useEffect(() => {
    dispatch(getSingleProduct(id));
    getCurrentProductImages();
  }, []);

  return (
    <div style={{ marginTop: "8%" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {currentProductImages?.map((currentProductImage) => {
                const {
                  urls: { full, regular },
                } = currentProductImage;
                return (
                  <SwiperSlide>
                    <img className="img-fluid" src={regular} alt="" />
                  </SwiperSlide>
                );
              })}
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
              {currentProductImages?.map((currentProductImage) => {
                const {
                  urls: { full, regular },
                } = currentProductImage;
                return (
                  <SwiperSlide>
                    <img className="img-fluid" src={regular} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-2"></div>
          <div className="col-lg-6 col-sm-12">
            <div className="details-card rounded grey-card p-4">
              <div className="row">
                <div className="col-6">
                  <h2>{currentProduct.name}</h2>
                </div>
                <div className="col-6">
                  <h4 style={{ color: "#0cc0df" }} className="mt-2 float-end">
                    {currentProduct.state}
                  </h4>
                </div>
              </div>
              <p className="sub">{currentProduct.info}</p>
              <div className="d-flex justify-content-between">
                <h4>
                  ₹{Math.floor(currentProduct.price)}/
                  <span style={{ color: "#0cc0df" }}>day</span>
                </h4>
                <h4>{currentProduct.duration} Days</h4>
              </div>

              <div className="booking-dates d-flex justify-content-around mt-5">
                <div className="from">
                  <label htmlFor="">From</label>
                  <input
                    type="date"
                    className="form-control date-select"
                    name=""
                    id=""
                  />
                </div>
                <div className="persons ms-3">
                  <label htmlFor="">Adults</label>
                  <div className="d-flex gap-2">
                    <p onClick={() => setAdultCount(adultCount + 1)}>
                      <i class="fa-solid fa-chevron-up"></i>
                    </p>
                    <p
                      style={{ background: "#131313" }}
                      className="rounded px-2 py-1"
                    >
                      {adultCount}
                    </p>
                    <p onClick={() => setAdultCount(adultCount - 1)}>
                      <i class="fa-solid fa-chevron-down"></i>
                    </p>
                  </div>
                </div>
                <div className="till">
                  <label htmlFor="">Till</label>
                  <input
                    type="date"
                    className="form-control date-select"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <Accordion defaultActiveKey="0" style={{ marginTop: "2rem" }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>History</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Climate</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Best Time To Visit</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
