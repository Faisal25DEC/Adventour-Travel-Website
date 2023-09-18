import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Stepper from "../Components/Stepper";
import Swal from "sweetalert2";
import "./payment.css";
import { useDispatch, useSelector } from "react-redux";
import { bookingReducer } from "./../Redux/bookingReducer/bookingReducer";
import { productReducer } from "./../Redux/productReducer/productReducer";
import { updateBookings } from "../Utils/firebase/firebase";
import { userReducer } from "./../Redux/userReducer/userReducer";
import { updateUser } from "../Redux/userReducer/userActions";

const Payment = () => {
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.productReducer);
  const { userDetails } = useSelector((state) => state.userReducer);
  const [currentStep, setCurrentStep] = useState(2);

  const [paymentStatus, setPaymentStatus] = useState(false);
  const navigate = useNavigate();
  const bookingDetails = useSelector((state) => state.bookingReducer);
  const { price } = bookingDetails;
  console.log(price);

  const loadScript = (src, callback) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {
      // Call handlePayment when the script is loaded and the component mounts
      handlePayment();
    });
  }, []);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_aqfBdhVeuKoES1",
      amount: Math.floor(price * 100),
      currency: "INR",
      description: "Payment for your service",
      handler: async (response) => {
        setPaymentStatus("Payment successful: " + response.razorpay_payment_id);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  useEffect(() => {
    if (paymentStatus) {
      setCurrentStep(3);

      Swal.fire({
        title: "THANK YOU",
        text: "Travel more with ADVENTOUR",
        imageUrl:
          "https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",

        customClass: {
          title: "new",
        },
      }).then(() => {
        updateBookings(userDetails, { ...currentProduct, ...bookingDetails });
        userDetails.bookings.push({ ...currentProduct, ...bookingDetails });
        dispatch(updateUser(userDetails));
        navigate("/bookings");
      });
    }
  }, [paymentStatus, navigate]);

  return (
    <div>
      <Stepper currentStep={currentStep} />
    </div>
  );
};

export default Payment;
