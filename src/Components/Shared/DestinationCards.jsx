import React from "react";
import "../DestinationCard/DestinationCard.css";
import "./Shared.css";
import location from "../../Assets/location.png";
import star from "../../Assets/star.png";
import durationIcon from "../../Assets/duration.png";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./../../Redux/userReducer/userReducer";
import { updateBookings } from "../../Utils/firebase/firebase";
import { updateUser } from "../../Redux/userReducer/userActions";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { bookingReducer } from "./../../Redux/bookingReducer/bookingReducer";

export const DestinationCards = ({ onProduct, product, onBookings }) => {
  const { userDetails } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const { images = "", name, duration, price, state, ratings } = product;
  const dispatch = useDispatch();
  // console.log(images);
  const imageSource = images ? images : "";
  return (
    <div className="mb-5">
      <div className="card">
        <img src={imageSource} className="card-img-top card-img" alt="..." />
        {onProduct && (
          <span
            style={{ background: "#0cc0df", color: "#1b1b1b" }}
            class="position-absolute top-0 start-50 translate-middle badge rounded-pill"
          >
            {ratings}
            <span class="visually-hidden">unread messages</span>
          </span>
        )}
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
              <div className="rating">
                <div className="rating-icon">
                  <img src={star} alt="" />
                </div>

                <p>Star</p>
              </div>
            </div>
          )}

          {onBookings && (
            <div className="guests">Guests : {product.guests}</div>
          )}
          {onBookings && (
            <div className="date">
              <div>
                {" "}
                <span className="from">From : </span> {product.from}
              </div>{" "}
              <div>
                <span className="to"> To : </span> {product.to}
              </div>
            </div>
          )}
          <div className="d-flex justify-content-between">
            <h2 style={{ color: "white" }}>
              <span style={{ color: "#0cc0df" }}>$</span>
              {price}/
              <span style={{ fontSize: "14px", color: "#6c9999" }}>Person</span>
            </h2>
            <Link to={`/destinations/${product.id}`}>
              <button className="btn">{onBookings ? "View" : "Book"}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
