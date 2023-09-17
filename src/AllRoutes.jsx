import { Route, Routes } from "react-router";
import React from "react";
import Payment from "./Pages/Payment";
import Checkout from "./Pages/Checkout";
import { Home } from "./Pages/Home";
import Authentication from "./Pages/AuthPage/Authentication";
import { DestinationDetails } from "./Pages/DestinationDetails";
import Destinations from "./Pages/Destinations/Destinations";
import { Booking } from "./Pages/Booking";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
