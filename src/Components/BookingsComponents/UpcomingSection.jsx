import "./BookingStyles.css";
import React from "react";
import { DestinationCards } from "../Shared/DestinationCards";
import { useSelector } from "react-redux";
import { userReducer } from "./../../Redux/userReducer/userReducer";

export const UpcomingSection = () => {
  const { isAuth, userDetails } = useSelector((state) => state.userReducer);
  return (
    <div className="container upcoming-bookings-container">
      {userDetails.bookings?.map((product) => {
        if (product.id !== "adventour@test") {
          return (
            <DestinationCards
              onProduct={false}
              product={product}
              onBookings={true}
            />
          );
        }
      })}
    </div>
  );
};
