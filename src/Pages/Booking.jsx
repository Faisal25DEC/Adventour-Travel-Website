import React from "react";
import { BookingBanner } from "../Components/BookingsComponents/BookingBanner";
import { BookingsSection } from "../Components/BookingsComponents/BookingsSection";
import { useSelector } from "react-redux";
import { userReducer } from "./../Redux/userReducer/userReducer";
import { Navigate } from "react-router";
import Fade from 'react-reveal/Fade';

export const Booking = () => {
  const { isAuth } = useSelector((state) => state.userReducer);
  if (isAuth === false) {
    return <Navigate to="/auth" state={{from:"bookings"}}/>;
  }
  return (
    <div>
        <Fade right>
        <BookingBanner/>
        </Fade>
        <Fade left>
        <BookingsSection/>
        </Fade>
    </div>
  );
};
