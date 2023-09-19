import React, { useEffect } from "react";
import "./ProductStyles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import LinesEllipsis from "react-lines-ellipsis";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "./../../Redux/productReducer/productReducer";
import {
  getCurrentProductStateDetails,
  getSingleProduct,
} from "../../Redux/productReducer/productActions";
import { useParams } from "react-router";

import { bookingReducer } from "../../Redux/bookingReducer/bookingReducer";

import {
  setDateDetails,
  setGuests,
  setPrice,
} from "./../../Redux/bookingReducer/bookingActions";
import { Link } from "react-router-dom";
import { MapComponent } from "./MapComponent";

const unsplashApiKey = `GyO4Y3ccun7RvAO8u4mPM8e-KNFfw3jC38X9Q-UnHsI`;
const unsplashApiUrl = `https://api.unsplash.com/search/photos/?client_id=${unsplashApiKey}`;

export const ProductSection = () => {
  const [render, setRender] = useState(false);
  const bookingDetails = useSelector((state) => state.bookingReducer);
  const { guests } = bookingDetails;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentProductImages, setCurrentProductImages] = useState([]);
  const { id } = useParams();
  const { currentProduct, currentProductStateDetails } = useSelector(
    (state) => state.productReducer
  );
  const [truncated, setTruncated] = useState(true);

  console.log(currentProductStateDetails);
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
    dispatch(getCurrentProductStateDetails(currentProduct.state));
    return function cleanup() {
      setCurrentProductImages(null);
    };
  }, [currentProduct]);
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
          <div className="col-lg-6 col-sm-12">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper rounded"
            >
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src={currentProduct.images}
                  alt=""
                  style={{ width: "100%", height: "30rem" }}
                />
              </SwiperSlide>
              {currentProductImages?.map((currentProductImage) => {
                const {
                  urls: { full },
                } = currentProductImage;
                return (
                  <SwiperSlide>
                    <img
                      className="img-fluid"
                      src={full}
                      style={{ width: "100%", height: "30rem" }}
                      alt=""
                    />
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
              className="mySwiperThumb mx-5"
            >
              <SwiperSlide>
                <img
                  className="img-fluid"
                  src={currentProduct.images}
                  style={{ width: "6rem", height: "5rem" }}
                  alt=""
                />
              </SwiperSlide>
              {currentProductImages?.map((currentProductImage) => {
                const {
                  urls: { full },
                } = currentProductImage;
                return (
                  <SwiperSlide>
                    <img
                      className="img-fluid"
                      src={full}
                      style={{ width: "6rem", height: "5rem" }}
                      alt=""
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <div className="details-card rounded grey-card p-4">
              <div className="row">
                <div className="col-6">
                  <h4>{currentProduct.name}</h4>
                </div>
                <div className="col-6">
                  <h4 style={{ color: "#0cc0df" }} className="mt-2 float-end">
                    {currentProduct.state}
                  </h4>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h4>
                  ${Math.floor(currentProduct.price)}/
                  <span style={{ color: "#0cc0df" }}>day</span>
                </h4>
                <h4>{currentProduct.duration} Days</h4>
              </div>
              <Accordion style={{ marginTop: "1rem" }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                    {truncated ? (
                      <LinesEllipsis
                        text={currentProduct.info}
                        maxLine="3"
                        ellipsis={
                          <>
                            ...{" "}
                            <p
                              style={{ color: "#0cc0df", cursor: "pointer" }}
                              onClick={() => setTruncated(!truncated)}
                            >
                              Read More
                            </p>
                          </>
                        }
                        basedOn="words"
                      />
                    ) : (
                      <div>
                        {currentProduct.info}{" "}
                        <p
                          style={{ color: "#0cc0df", cursor: "pointer" }}
                          onClick={() => setTruncated(!truncated)}
                        >
                          Less
                        </p>
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>History</Accordion.Header>
                  <Accordion.Body>
                    {currentProductStateDetails[0] && truncated ? (
                      <LinesEllipsis
                        text={
                          currentProductStateDetails[0] &&
                          currentProductStateDetails[0].history
                        }
                        maxLine="3"
                        ellipsis={
                          <>
                            ...{" "}
                            <p
                              style={{ color: "#0cc0df", cursor: "pointer" }}
                              onClick={() => setTruncated(!truncated)}
                            >
                              Read More
                            </p>
                          </>
                        }
                        basedOn="words"
                      />
                    ) : (
                      <div>
                        {currentProductStateDetails[0] &&
                          currentProductStateDetails[0].history}{" "}
                        <p
                          style={{ color: "#0cc0df", cursor: "pointer" }}
                          onClick={() => setTruncated(!truncated)}
                        >
                          Less
                        </p>
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Climate</Accordion.Header>
                  <Accordion.Body>
                    {currentProductStateDetails[0] && truncated ? (
                      <LinesEllipsis
                        text={
                          currentProductStateDetails[0] &&
                          currentProductStateDetails[0].climate
                        }
                        maxLine="3"
                        ellipsis={
                          <>
                            ...{" "}
                            <p
                              style={{ color: "#0cc0df", cursor: "pointer" }}
                              onClick={() => setTruncated(!truncated)}
                            >
                              Read More
                            </p>
                          </>
                        }
                        basedOn="words"
                      />
                    ) : (
                      <div>
                        {currentProductStateDetails[0] &&
                          currentProductStateDetails[0].climate}{" "}
                        <p
                          style={{ color: "#0cc0df", cursor: "pointer" }}
                          onClick={() => setTruncated(!truncated)}
                        >
                          Less
                        </p>
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Best Time To Visit</Accordion.Header>
                  <Accordion.Body>
                    {currentProductStateDetails[0] && truncated ? (
                      <LinesEllipsis
                        text={
                          currentProductStateDetails[0] &&
                          currentProductStateDetails[0].about
                        }
                        maxLine="3"
                        ellipsis={
                          <>
                            ...{" "}
                            <p
                              style={{ color: "#0cc0df", cursor: "pointer" }}
                              onClick={() => setTruncated(!truncated)}
                            >
                              Read More
                            </p>
                          </>
                        }
                        basedOn="words"
                      />
                    ) : (
                      <div>
                        {currentProductStateDetails[0] &&
                          currentProductStateDetails[0].about}{" "}
                        <p
                          style={{ color: "#0cc0df", cursor: "pointer" }}
                          onClick={() => setTruncated(!truncated)}
                        >
                          Less
                        </p>
                      </div>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Location</Accordion.Header>
                  <Accordion.Body>
                    <MapComponent />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="booking-dates d-flex justify-content-between mt-5">
                <div className="from">
                  <label htmlFor="">From</label>
                  <input
                    onChange={handleDateChange}
                    type="date"
                    className="form-control date-select"
                    name=""
                    id=""
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="persons ms-3">
                  <label htmlFor="">Adults</label>
                  <div className="d-flex gap-2">
                    <p style={{ cursor: "pointer" }}>
                      <i
                        onClick={(e) => {
                          dispatch(setGuests(1));
                          dispatch(setPrice(currentProduct.price));
                          e.stopPropagation();
                        }}
                        class="fa-solid fa-chevron-up"
                      ></i>
                    </p>
                    <p
                      style={{ background: "#131313" }}
                      className="rounded px-2 py-1"
                    >
                      {guests}
                    </p>
                    <p style={{ cursor: "pointer" }}>
                      <i
                        onClick={(e) => {
                          if (guests <= 0) return;
                          dispatch(setGuests(-1));
                          dispatch(setPrice(currentProduct.price));
                          e.stopPropagation();
                        }}
                        class="fa-solid fa-chevron-down"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <button disabled={guests === 0} className="btn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
