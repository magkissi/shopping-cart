import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Cart from "./cart";
import { items } from "./items";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([1]);

  const addToCart = (product) => {
    const findItem = cart.find((item) => item.id === product.id);

    if (!findItem) {
      setCart((prevProduct) => {
        return [product, ...prevProduct];
      });
    }
  };

  const increment = () => {
    setCount({ count: count + 1 });
    return count;
  };

  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          |
          <Link to="/cart">
            <h4>Cart-{cart.length}</h4>
          </Link>
        </div>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home items={items} handleAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            component={() => (
              <Cart id="Hello" cart={cart} addItem={increment} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
