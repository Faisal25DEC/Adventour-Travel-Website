import React from 'react'
import {useSelector} from "react-redux"
import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router';
import Payment from './Payment';
import Stepper from '../Components/Stepper';
const Checkout = () => {
/// will  take cart items if want 
//this will be called when we click on proceed to pay 
//on cart page
//a form for address details

//get name and email from and mobile no from login detail
//saved in store

// var logindetail=useSelector((store)=>store.login);
// var {name,email}=logindetail
//pass this to from
      const [formData, setFormData] = useState({
            firstName: '',
    lastName: '',
    streetAddress: '',
    postalCode: '',
    phoneNumber: '',
          });

          const [useBillingAddress, setUseBillingAddress] = useState(false);
          //on submit of form take it to payment page
          //using navigate


    // Save the combined data to Redux store

    // Navigate to the Payment component
const navigate=useNavigate();
   const handlesubmit=(e)=>{
navigate("/payment")
     ;
   }
// stepper
const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
     <Stepper currentStep={currentStep}/>
      <h2>Checkout</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          />
        </div>

        <label>
            <input
              type="checkbox"
              name="useBillingAddress"
              checked={useBillingAddress}
              onChange={() => setUseBillingAddress(!useBillingAddress)}
            />{' '}
            Use as Billing Address
          </label>
        <button type="submit">Proceed to Payment</button>
      </form>
    
    </div>
  )
}

export default Checkout