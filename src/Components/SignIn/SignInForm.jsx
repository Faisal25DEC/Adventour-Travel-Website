import React, { useState } from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../Utils/firebase/firebase";
import { updateProfile } from "firebase/auth";
import FormInput from "../FormInput/FormInput";

import "./SignInForm.scss";
// import Button from "..";
import { useDispatch, useSelector } from "react-redux";
import { userReducer } from "./../../Redux/userReducer/userReducer";
import { initiateSignUp } from "../../Redux/userReducer/userActions";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, steFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { signUp } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const signInWithGoole = async () => {
    try {
      const { user } = await signInWithGooglePopup();

      const userDocRef = await createUserDocumentFromAuth(user, {
        cartArray: ["a"],
        bookingsArray: ["b"],
        wishlist: ["s"],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    steFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    steFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user found");
          break;
        default:
          console.log(err);
      }

      console.log(err);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <button className="btn" type="submit" buttonType="default">
            Sign in
          </button>
          <button
            className="btn google-btn"
            type="button"
            buttonType="google"
            onClick={signInWithGoole}
          >
            <i className="fa-brands fa-google me-2"></i>Sign In With Google
          </button>
          {/* <button
            onClick={async () => {
              updateProfile(auth.currentUser, {
                cartArray: [...auth.currentUser.cartArray, "faisa"],
              })
                .then(() => {
                  console.log("updated");
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                });
            }}
          >
            updateUserDoc
          </button> */}
        </div>
        <div className="sign-up mt-3">
          <p className="sub">
            Create an acoount with us.{" "}
            <span
              style={{ color: "#0cc0df", cursor: "pointer" }}
              onClick={() => {
                dispatch(initiateSignUp());
              }}
            >
              Click here.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
