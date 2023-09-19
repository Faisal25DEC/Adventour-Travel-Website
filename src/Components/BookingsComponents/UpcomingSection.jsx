import "./BookingStyles.css";
import React from "react";
import { DestinationCards } from "../Shared/DestinationCards";
import { useSelector } from "react-redux";
import { userReducer } from "./../../Redux/userReducer/userReducer";

export const UpcomingSection = () => {
  const { isAuth, userDetails } = useSelector((state) => state.userReducer);
  return (
    <div className="container mt-5">
      <div className="row">
      {userDetails.bookings?.map((product) => {
        if (product.id !== "adventour@test" && product.bookedTill>=Date.now()) {
          return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <DestinationCards
              onProduct={false}
              product={product}
              onBookings={true}
            />
            </div>
          );
        }
      })}
      </div>
    </div>
  );
};
