import React, { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import { Form } from "react-router-dom";
import "./SignUpForm.scss";
import {
  initialLogin,
  initiateSignUp,
  loginUser,
} from "../../Redux/userReducer/userActions";
import { useDispatch } from "react-redux";
// import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, steFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

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
    if (password != confirmPassword) {
      alert("passwords didn't match");
      return;
    }
    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);

      const userDoc = await createUserDocumentFromAuth(user.user, {
        displayName,
      });
      dispatch(loginUser()); 
      resetFormFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn" buttonType="default">
            Sign Up
          </button>
          <div className="sign-in-go-back">
            <span
              style={{ color: "#0cc0df", cursor: "pointer" }}
              onClick={() => {
                dispatch(initialLogin());
              }}
            >
              Go back to Sign In
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
