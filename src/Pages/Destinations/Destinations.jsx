import "./Destinations.css";
import React, { useEffect, useState } from "react";
import DestinationBanner from "../../Components/DestinationBanner/DestinationBanner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/productReducer/productActions";
import { signInWithGooglePopup } from "../../Utils/firebase/firebase";
import DestinationCard from "../../Components/DestinationCard/DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const Destinations = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getProducts(1));
  //   }, []);

  return (
    <div className="destinations-wrapper">
      <DestinationBanner />
      <DestinationCard />
    </div>
  );
};

export default Destinations;
