import React from "react";
import "./cartHeader.css";

function CartHeader() {
  return (
    <div className="cartHeader">
      <div className="cartHeader__text1">
        <h1>Your Cart</h1>
      </div>
      <div className="cartHeader__text2">
        <h3>Item</h3>
        <h3>Quantity</h3>
        <h3>Unit Price</h3>
        <h3>Amount</h3>
        <h3>Remove</h3>
      </div>
    </div>
  );
}

export default CartHeader;
