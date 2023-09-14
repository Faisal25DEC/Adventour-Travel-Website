import { Route,Routes } from "react-router";
import React from 'react'
import Payment from "./Pages/Payment";
import Checkout from "./Pages/Checkout";
;
const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Checkout/>}></Route>
    <Route path="/payment" element={<Payment/>}></Route>
    
    
    </Routes>
    
    
    </div>
  )
}

export default AllRoutes