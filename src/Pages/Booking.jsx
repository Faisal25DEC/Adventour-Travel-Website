import React from "react";
import { BookingBanner } from "../Components/BookingsComponents/BookingBanner";
import { BookingsSection } from "../Components/BookingsComponents/BookingsSection";
import { useSelector } from "react-redux";
import { userReducer } from "./../Redux/userReducer/userReducer";
import { Navigate } from "react-router";

export const Booking = () => {
  const { isAuth } = useSelector((state) => state.userReducer);
  if (isAuth == false) {
    return <Navigate to="/auth" />;
  }
  return (
    <div>
      <BookingBanner />
      <BookingsSection />
    </div>
  );
};
