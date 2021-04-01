import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./hoc/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Payment from "./Components/Payment/Payment";

const promise = loadStripe(
  "pk_test_51IbWPXHExom4fEyWeW2ySuUqumWTOhARIQeGUk5hFXMW3qcPaw5OiAHWbayssawxLmO5VvsoPZG8LQaVlufhfgjZ00n8SGLdSg"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app comp loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
