import ProductList from "./ProductList";
import Cart from "./Cart";
import PropTypes from "prop-types";
import { productsType } from "../types";
import Book from "./Book";

function Main(props: Props) {
  /*let cartItems = props.products.filter(function (product) {
    return props.itemsInCart.ilcludes(product.id);
  });*/

  function getProduct(products: Book[], item: string) {
    return products.find((product: Book) => item === product.id);
  }
  let cartItems = props.itemsInCart.map((id: string) =>
    getProduct(props.products, id)
  );

  return (
    <main className="row">
      <div className="col-md-8">
        <ProductList
          products={props.products}
          itemsInCart={props.itemsInCart}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      </div>
      <div className="col-md-4">
        <Cart cartItems={cartItems} />
      </div>
    </main>
  );
}

interface Props {
  products: Book[];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export default Main;
