import "./Destinations.css";
import React, { useEffect } from "react";
import DestinationBanner from "../../Components/DestinationBanner/DestinationBanner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/productReducer/productActions";
import { signInWithGooglePopup } from "../../Utils/firebase/firebase";
import DestinationCard from "../../Components/DestinationCard/DestinationCard";

const Destinations = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);

  return (
    <div className="destinations-wrapper">
      <DestinationBanner />
      <DestinationCard />
    </div>
  );
};

export default Destinations;
