import React from "react";

import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../hoc/StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  let totalPrice = basket.reduce(function (total, arr) {
    return total + arr.price;
  }, 0);

  console.log(totalPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong>{totalPrice.toFixed(2)}</strong>
            </p>
            <small className="subtotal__gitft">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
