import { Routes, Route } from "react-router-dom";

import ProductList from "./ProductList";
import Cart from "./Cart";
import PropTypes from "prop-types";
import { productsType } from "../types";

function Main(props) {
  /*let cartItems = props.products.filter(function (product) {
    return props.itemsInCart.ilcludes(product.id);
  });*/

  function getProduct(products, item) {
    return products.find((product) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id) => getProduct(props.products, id));

  return (
    <main className="row">
      <div className="col-md-12">
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={props.products}
                itemsInCart={props.itemsInCart}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={props.removeFromCart}
                submitCart={props.submitCart}
              />
            }
          />
        </Routes>
      </div>
    </main>
  );
}

Main.propTypes = {
  products: productsType,
  itemsInCart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

Main.defaultProps = {
  products: [],
  cartItems: [],
};

export default Main;
