import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Book from "./Book";

import "./App.css";

function App() {
  const [itemsInCart, setItemsInCart] = useState<Array<string>>([]);
  const [products, setProducts] = useState<Array<Book>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:3000/data/products.json"
        );
        const json = await response.json();
        setProducts(shuffleArray(json));
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
    setLoading(false);
  }, [setProducts]);

  function addToCart(id: string) {
    let newItems = [...itemsInCart, id];
    setItemsInCart(newItems);
  }

  function removeFromCart(idToRemove: string) {
    let newItems = itemsInCart.filter((id) => id !== idToRemove);
    setItemsInCart(newItems);
  }

  function shuffleArray(array: Book[]) {
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
      <Header />
      <Main
        products={products}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;
