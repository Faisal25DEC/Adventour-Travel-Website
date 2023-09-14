import React from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../Components/SignUp/SignUpForm'
import SignInForm from '../../Components/SignIn/SignInForm'
import "./Authentication.scss";
// import Button from "../../Components/button/button.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
