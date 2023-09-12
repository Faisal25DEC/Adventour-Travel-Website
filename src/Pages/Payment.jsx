import React from 'react'
import Stepper from '../Components/Stepper';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
// import {useSelector} from "react-redux";
//to get value of cart that is total price from store
//send it to rajorpay function
const Payment = () => {
      const [paymentStatus, setPaymentStatus] = useState(false);
  const loadScript = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  };

//   useSelector((store)=>store.cartValue)
//to navigate
const navigate=useNavigate();
  const totalPrice=788;
  const handlePayment = async () => {
    const options = {
      key: "rzp_test_aqfBdhVeuKoES1",
      amount: totalPrice*100,
      currency: "INR",
      
      description: "Payment for your service",
      
      handler: async (response) => {
        // Handle the payment success
        setPaymentStatus("Payment successful: " + response.razorpay_payment_id);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
//     navigate("/successfull");
  };
  if(paymentStatus){
      Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          }).then(()=>{
            navigate("/")
          })
          
          //back to home pGE
  }

  useEffect(() => {
      loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {});
    }, []);
const [currentStep, setCurrentStep] = useState(2);
  
  return (
    <div>
    <div>
    <Stepper currentStep={currentStep}/>
    </div>
    <button onClick={handlePayment}>Pay now</button>
    
    </div>
  )
}

export default Payment