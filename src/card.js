import React from 'react';
import './card.css';


function Card({ image, description, name, price}) {
    return (
        <div className="card__container">
            <div className="card__img"> 
                <img src={image} alt={description} />
            </div>
            <div className="card__text"> 
            <h1>{name}</h1>
                <h4>{price}</h4>
            </div>
            <button>Add to cart</button>
        </div>
    )
}

export default Card;
