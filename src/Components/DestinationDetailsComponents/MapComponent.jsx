import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "../../Assets/MapStyles.json";
import { useSelector } from "react-redux";

export const MapComponent = () => {
  const { currentProduct } = useSelector((store) => store.productReducer);

  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <div style={{ height: "100vh", width: "100%" }}>
        <div style={{ width: "100%" }}>
          <iframe
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={`${currentProduct.location}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
