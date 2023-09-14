import React from "react";
import { useEffect } from "react";
import signUpForm from "../../Components/sign-up-form/sign-up-form.component";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebse.utils";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
import Button from "../../Components/button/button.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;
