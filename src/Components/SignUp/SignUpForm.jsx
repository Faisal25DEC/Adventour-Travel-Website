import React, { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebse.utils";
import FormInput from "../form-input/form-input.component";
import { Form } from "react-router-dom";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, steFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
      resetFormFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
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

        <Button buttonType="default">Sign in</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
