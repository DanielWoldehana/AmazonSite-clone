import React from "react";

import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../hoc/StateProvider";
import { getBasketTotal } from "../../hoc/reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  // let totalPrice = basket.reduce(function (total, arr) {
  //   return total + arr.price;
  // }, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gitft">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
