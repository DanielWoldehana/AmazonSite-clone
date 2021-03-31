import React from "react";
import amazonAd from "../../images/amazonAd2.jpeg";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={amazonAd} alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;