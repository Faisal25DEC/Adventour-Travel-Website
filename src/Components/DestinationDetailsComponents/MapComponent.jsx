import React from "react";
import styles from "../../Assets/MapStyles.json";
import { useSelector } from "react-redux";

export const MapComponent = () => {
  const { currentProduct } = useSelector((store) => store.productReducer);
  console.log(currentProduct.location);
  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <iframe
            class="gmap_iframe"
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            mapType="sattelite"
            src={`https://www.google.com/maps/embed/v1/search?q=${currentProduct.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
