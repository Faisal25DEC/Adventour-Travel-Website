import React from "react";
import "./ProductStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const ProductSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div style={{ marginTop: "8%" }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
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
              <SwiperSlide>
                <div className="img-container">
                  <img
                    className="test"
                    src="https://as2.ftcdn.net/v2/jpg/00/91/61/13/1000_F_91611321_Uqu1dGIIhXxRuTqT5nnvNf5gdn2mHNMb.jpg"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  alt=""
                />
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
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <div className="details-card rounded grey-card p-4">
              <div className="row">
                <div className="col-6">
                  <h2>Place Name</h2>
                </div>
                <div className="col-6">
                  <h4 style={{ color: "#0cc0df" }} className="mt-2 float-end">
                    Andaman & Nicobar
                  </h4>
                </div>
              </div>
              <p className="sub">
                Neil Island is one of India’s Andaman Islands, in the Bay of
                Bengal. Bharatpur Beach has coral reefs teeming with tropical
                fish. Laxmanpur Beach is known for its sunset views. Howrah
                Bridge is a natural rock formation accessible at low tide. Near
                the island’s wharf is Neil Kendra village, with a curving, sandy
                bay dotted with boats. Off the southeast coast, the tiny Sir
                Hugh Rose Island is a sanctuary for turtles.
              </p>
              <div className="d-flex justify-content-between">
                <h4>₹765/<span style={{ color: "#0cc0df" }}>day</span></h4>
                <h4>10 Days</h4>
              </div>

              <div className="booking-dates d-flex justify-content-between mt-5">
                <div className="from">
                  <label htmlFor="">From</label>
                  <input
                    type="date"
                    className="form-control date-select"
                    name=""
                    id=""
                  />
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
              <Accordion defaultActiveKey="0" style={{marginTop: "2rem"}}>
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
                <Accordion.Item eventKey="1">
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
