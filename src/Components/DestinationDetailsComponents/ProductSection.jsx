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

import { bookingReducer } from "../../Redux/bookingReducer/bookingReducer";

import {
  setDateDetails,
  setGuests,
  setPrice,
} from "./../../Redux/bookingReducer/bookingActions";
import { Link } from "react-router-dom";

const unsplashApiKey = `GyO4Y3ccun7RvAO8u4mPM8e-KNFfw3jC38X9Q-UnHsI`;
const unsplashApiUrl = `https://api.unsplash.com/search/photos/?client_id=${unsplashApiKey}`;

export const ProductSection = () => {
  const [render, setRender] = useState(false);
  const bookingDetails = useSelector((state) => state.bookingReducer);
  const { guests } = bookingDetails;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentProductImages, setCurrentProductImages] = useState([]);
  const { id } = useParams();
  const { currentProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getPlaceImages = async (name) => {
    console.log(name);
    try {
      let apiResponse = await fetch(`${unsplashApiUrl}&page=1&query=${name}`);
      let placeImages = await apiResponse.json();
      console.log(placeImages);
      setCurrentProductImages(placeImages.results);
    } catch (err) {
      console.log(err);
    }
  };

  // const getCurrentProductImages = async () => {
  //   console.log("first");
  //   const placeImages = await getPlaceImages(currentProduct.name);
  // };
  useEffect(() => {
    getPlaceImages(currentProduct.name);
    return function cleanup() {
      setCurrentProductImages(null);
    };
  }, [currentProduct.name]);
  useEffect(() => {
    dispatch(getSingleProduct(id));
    setRender(!render);
  }, []);
  // useEffect(() => {
  //   dispatch(getSingleProduct(id));
  //   getPlaceImages(currentProduct.name); // Call it here
  // }, []);
  console.log(currentProduct.name);
  const formatDateToYYMMDD = (date) => {
    const year = date.getFullYear().toString().slice(-4);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    const fromDate = e.target.value;

    const selectedDate = new Date(fromDate);
    const lastDate = new Date(selectedDate);
    lastDate.setDate(lastDate.getDate() + currentProduct.duration);

    const formattedNewDate = formatDateToYYMMDD(lastDate);
    console.log(formattedNewDate); // This will log the date in "yymmdd" format
    const bookedTill = lastDate.getTime();
    console.log(bookedTill);
    dispatch(
      setDateDetails({ fromDate, lastDate: formattedNewDate, bookedTill })
    );
  };
  console.log(bookingDetails);
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
                    onChange={handleDateChange}
                    type="date"
                    className="form-control date-select"
                    name=""
                    id=""
                  />
                </div>
                <div className="persons ms-3">
                  <label htmlFor="">Adults</label>
                  <div className="d-flex gap-2">
                    <p
                      onClick={() => {
                        dispatch(setGuests(1));
                        dispatch(setPrice(currentProduct.price));
                      }}
                    >
                      <i class="fa-solid fa-chevron-up"></i>
                    </p>
                    <p
                      style={{ background: "#131313" }}
                      className="rounded px-2 py-1"
                    >
                      {guests}
                    </p>
                    <p
                      onClick={() => {
                        if (guests <= 0) return;
                        dispatch(setGuests(-1));
                        dispatch(setPrice(currentProduct.price));
                      }}
                    >
                      <i class="fa-solid fa-chevron-down"></i>
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <button disabled={guests == 0} className="btn">
                  Book Now
                </button>
              </Link>
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
