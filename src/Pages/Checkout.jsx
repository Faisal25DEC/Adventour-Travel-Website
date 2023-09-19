// import React from 'react'
// import {useSelector} from "react-redux"
// import { useState } from 'react';
// import { Navigate,useNavigate } from 'react-router';
// import Payment from './Payment';
// import Stepper from '../Components/Stepper';
// import "./Checkout.css";
// import Swal from 'sweetalert2'

// const Checkout = () => {
// /// will  take cart items if want
// //this will be called when we click on proceed to pay
// //on cart page
// //a form for address details

// //get name and email from and mobile no from login detail
// //saved in store

// // var logindetail=useSelector((store)=>store.login);
// // var {name,email}=logindetail
// //pass this to from
//       const [formData, setFormData] = useState({
//             firstName: '',
//     lastName: '',
//     streetAddress: '',
//     postalCode: '',
//     phoneNumber: '',
//           });

//           const [useBillingAddress, setUseBillingAddress] = useState(false);
//           //on submit of form take it to payment page
//           //using navigate

//     // Save the combined data to Redux store

//     // Navigate to the Payment component
// const navigate=useNavigate();
//    const handlesubmit=(e)=>{
//       e.preventDefault();
//       if(formData.firstName==""||formData.streetAddress==""||formData.postalCode==""||formData.phoneNumber==""||formData.lastName==""){
//             Swal.fire('Fill all the details in the form')

//         }
//         else{
// navigate("/payment")
//         }
//    }
// // stepper
// const [currentStep, setCurrentStep] = useState(1);
//   return (
//     <div>
//      <Stepper currentStep={currentStep}/>
//       <h2>Checkout</h2>
//       <div id="main">
//       <div id="mainform">
//       <form onSubmit={handlesubmit} className="checkout-form">
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="streetAddress">Street Address:</label>
//           <input
//             type="text"
//             id="streetAddress"
//             name="streetAddress"
//             value={formData.streetAddress}
//             onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="postalCode">Postal Code:</label>
//           <input
//             type="text"
//             id="postalCode"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//           />
//         </div>
//         <div className="form">
//         <label className="checkbox-label">
//             <input
//               type="checkbox"
//               name="useBillingAddress"
//               checked={useBillingAddress}
//               onChange={() => setUseBillingAddress(!useBillingAddress)}
//             />{' '}
//             Use as Billing Address
//           </label>
//           </div>

//         <button type="submit">Proceed to Payment</button>
//       </form>
//       </div>
//       <div id="imgone">
//       <img src="https://www.jouelzy.com/wp-content/uploads/2018/11/influencer-in-africa.png"></img>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Checkout

import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import Stepper from "../Components/Stepper";
import "./Checkout.css"; // Import your CSS file for styling
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { bookingReducer } from "./../Redux/bookingReducer/bookingReducer";
import { setBookingDetails } from "../Redux/bookingReducer/bookingActions";

const Checkout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = useSelector((store) => store.userReducer);
  const bookingDetails = useSelector((store) => store.bookingReducer);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    postalCode: "",
    phoneNumber: "",
  });

  const [useBillingAddress, setUseBillingAddress] = useState(false);
  const navigate = useNavigate();

  console.log(bookingDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.streetAddress === "" ||
      formData.postalCode === "" ||
      formData.phoneNumber === "" ||
      formData.lastName === ""
    ) {
      Swal.fire("Fill in all the details in the form");
    } else {
      navigate("/payment");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log("useEffect checkout");
    if (location.state && location.state.from === "signIn") {
      const bookingDetailsLocalStorage = JSON.parse(
        localStorage.getItem("bookingDetailsFromCheckout")
      );
      dispatch(setBookingDetails(bookingDetailsLocalStorage));
      console.log(bookingDetailsLocalStorage);
    }
  }, []);

  if (!isAuth) {
    return <Navigate to="/auth" state={{ from: "checkout" }} />;
  }

  return (
    <div style={{ marginTop: "8%" }}>
      <Stepper currentStep={1} />
      <div className="checkout-container">
        {/* <h2>Checkout</h2> */}
        <div className="checkout-content">
          <div className="checkout-form-container">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="streetAddress">Street Address:</label>
                <input
                  type="address"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">Postal Code:</label>
                <input
                  type="number"
                  id="postalCode"
                  name="postalCode"
                  maxLength={7}
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="useBillingAddress"
                    checked={useBillingAddress}
                    onChange={() => setUseBillingAddress(!useBillingAddress)}
                    required
                  />{" "}
                  Use as Billing Address
                </label>
              </div>
              <button type="submit" className="btn">
                Proceed to Payment
              </button>
            </form>
          </div>
          <div className="checkout-image-container">
            <img
              src="https://www.jouelzy.com/wp-content/uploads/2018/11/influencer-in-africa.png"
              alt="Influencer"
              className="checkout-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
