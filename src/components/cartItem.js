import React from "react";
import "./cartItem.css";

function CartItem({ id, image, description, name, price, increaseItem }) {
  const handleDecrement = () => {
    console.log("subtracting", id);
  };

  const handleIncrement = () => {
    console.log(increaseItem);
  };
  return (
    <div className="cartItem__container">
      <div className="cartItem__img">
        <img src={image} alt={description} />
        <p>{name}</p>
      </div>
      <div className="cartItem__button">
        <button onClick={handleDecrement}>-</button>
        <div id="counter">0</div>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>{price}</p>
      <p>total amount</p>
      <span className="remove__icon">x</span>
    </div>
  );
}

export default CartItem;
