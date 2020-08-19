import React from "react";
import Card from "./card";
import "./collection.css";

function Collection({ products, addProduct }) {
  const collectionItems = products.map((item) => {
    return (
      <Card
        id={item.id}
        key={item.name}
        image={item.image}
        description={item.description}
        name={item.name}
        price={item.price}
        forwardProduct={addProduct}
      />
    );
  });

  return <div className="collection__container">{collectionItems}</div>;
}

export default Collection;
