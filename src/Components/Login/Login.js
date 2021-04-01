import React, { useState } from "react";
import amazonLogo from "../../images/amazonLogo2.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefualt();
    //firebase login
  };

  const register = (e) => {
    e.preventDefualt();

    //firebase create user
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          See our Privacy Notice, our Cookies Notice and our Interest-Based Ads
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
