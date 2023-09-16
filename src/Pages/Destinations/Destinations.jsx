import "./Destinations.css";

import React, { useEffect, useState } from "react";
import DestinationBanner from "../../Components/DestinationBanner/DestinationBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getStateProducts,
} from "../../Redux/productReducer/productActions";
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
import { getPlaceImages } from "../../Utils/unplash/unplash";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import { DestinationCards } from "../../Components/Shared/DestinationCards";
import Pagination from "../../Components/Pagination/Pagination";
const Destinations = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [page, setPage] = useState(1);
  const { productsPerPage, stateProducts } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  console.log(productsPerPage);
  useEffect(() => {
    if (location.state && location.state.state) {
      dispatch(getStateProducts(location.state.state));
      console.log(stateProducts);
      setSearchParams({ state: location.state.state });
    }
    dispatch(getProducts(page));
  }, [page]);

  return (
    <div className="destinations-wrapper container">
      <DestinationBanner />
      <div className="destination-cards-wrapper mt-5">
        {productsPerPage?.map((productPerPage) => {
          return (
            productPerPage && (
              <DestinationCards onProduct={true} product={productPerPage} />
            )
          );
        })}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default Destinations;
