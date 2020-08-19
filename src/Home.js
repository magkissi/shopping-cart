import React from "react";
import "./home.css";
import Collection from "./collection";

function Home({ items, handleAddToCart }) {
  return (
    <div className="home__collection">
      <Collection products={items} addProduct={handleAddToCart} />
    </div>
  );
}

export default Home;
