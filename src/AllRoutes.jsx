import { Route, Routes } from "react-router";
import React from "react";
import Payment from "./Pages/Payment";
import Checkout from "./Pages/Checkout";
import Successfull from "./Pages/Success";
import { Home } from "./Pages/Home";
import { DestinationDetails } from "./Pages/DestinationDetails";
import AuthPage from './Pages/AuthPage/AuthPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<AuthPage/>}></Route>
        <Route path="/destination/test" element={<DestinationDetails />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/successfull" element={<Successfull />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
