import { useState, useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

import "./App.css";

function App(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:3000/data/products.json"
        );
        const json = await response.json();
        props.loadProducts(shuffleArray(json));
        props.readCart();
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [props.loadProducts]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  if (loading) {
    return <div> loading data ...</div>;
  }
  return (
    <div className="container">
      <Header itemsInCart={props.itemsInCart} />
      <Main
        products={props.products}
        itemsInCart={props.itemsInCart}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        submitCart={props.submitCart}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
