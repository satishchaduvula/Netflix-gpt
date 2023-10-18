import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <Header />
      <img
        className="login-bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-login-page"
      />
      <form className="sign-in-page">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input type="text" placeholder="Name" className="sign-in-inputs" />
        )}
        <input type="text" placeholder="Email" className="sign-in-inputs" />
        <input
          type="password"
          placeholder="Password"
          className="sign-in-inputs"
        />
        <button className="sign-in-btn">Sign In</button>

        <p
          className="sign-up"
          onClick={() => {
            setIsSignIn(!isSignIn);
          }}
        >
          {isSignIn
            ? "New to Netflix? Sigh Up now."
            : "Already a User? Sign In now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
