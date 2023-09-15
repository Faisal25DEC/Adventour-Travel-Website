import React from "react";
import GoogleMapReact from "google-map-react";
import styles from '../../Assets/MapStyles.json'


export const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  
  return (
    <div className="container" style={{marginTop: "10%"}}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          // style={styles}
        ></GoogleMapReact>
      </div>
    </div>
  );
};
