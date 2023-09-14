// src/pages/authpage/AuthPage.jsx

import React, { useState } from 'react';
import Signin from "../../Components/SignIn/SignIn"
import Signup from "../../Components/SignUp/SignUp";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <h1>Authentication Page</h1>
      {isSignIn ? <Signin /> : <Signup />}
      <p>
        {isSignIn ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={toggleSignIn}>
          {isSignIn ? 'Sign up here' : 'Sign in here'}
        </button>
      </p>
    </div>
  );
}

export default AuthPage;
