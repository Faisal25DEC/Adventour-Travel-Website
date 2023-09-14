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
// import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, steFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
          {/* <Button type="submit" buttonType="default"> */}
            Sign in
          {/* </Button> */}
          {/* <Button type="button" buttonType="google" onClick={signInWithGoole}> */}
            Sign In With Google
          {/* </Button> */}
          <button
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
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
