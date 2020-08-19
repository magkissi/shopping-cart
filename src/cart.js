import React from "react";
import "./cart.css";
import CartItem from "./components/cartItem";
import Header from "./components/CartHeader";

const Cart = ({ cart, addItem }) => {
  return (
    <div className="cart__wrapper">
      <div className="cart__headerContainer">
        <Header />
      </div>
      {cart.map((item, index) => (
        <CartItem
          id={item.id}
          key={index}
          image={item.image}
          description={item.description}
          name={item.name}
          price={item.price}
          increaseItem={addItem}
        />
      ))}
    </div>
  );
};

export default Cart;
