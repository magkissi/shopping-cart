import React from "react";
import "./card.css";

function Card({ id, image, description, name, price, forwardProduct }) {
  const handleClick = () => {
    const product = {
      id,
      image,
      description,
      name,
      price,
    };
    forwardProduct(product);
  };
  return (
    <div className="card__container">
      <div className="card__img">
        <img src={image} alt={description} />
      </div>
      <div className="card__text">
        <h1>{name}</h1>
        <h4>{price}</h4>
      </div>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}

export default Card;
