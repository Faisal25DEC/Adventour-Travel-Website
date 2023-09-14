import React from "react";
import "../DestinationCard/DestinationCard.css";
import "./Shared.css";
import location from "../../Assets/location.png";
import star from "../../Assets/star.png";
import durationIcon from "../../Assets/duration.png";

export const DestinationCards = ({ onProduct, product }) => {
  const { images = "", name, duration, price, state } = product;
  // console.log(images);
  const imageSource = images ? images : "";
  return (
    <div className="mb-5">
      <div className="card border-0 p-3">
        <img src={imageSource} className="card-img-top card-img" alt="..." />
        <div className="card-body">
          <h3 className="destination-card-title" style={{ color: "white" }}>
            {" "}
            <img className="location-icon" src={location} alt="" />
            {name} - {duration} Days
          </h3>
          <p style={{ color: "#6c9999" }} className="card-text">
            {state}, India
          </p>
          {onProduct && (
            <div className="duration-rating-wrapper">
              <div className="duration">
                <div className="duration-icon">
                  <img src={durationIcon} alt="" />
                </div>

                <p>duration</p>
              </div>
              <div className="rating">
                <div className="rating-icon">
                  <img src={star} alt="" />
                </div>

                <p>Star</p>
              </div>
            </div>
          )}
          <h2 style={{ color: "white" }}>
            <span style={{ color: "#0cc0df" }}>$</span>
            {price}/
            <span style={{ fontSize: "10px", color: "#6c9999" }}>Person</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
