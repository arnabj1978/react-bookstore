import Product from "./Product";
import styles from "./ProductList.module.css";
import PropTypes from "prop-types";
import { productsType } from "../types";
import Book from "./Book";

function ProductList(props: Props) {
  let productInCart = false;
  return (
    <ul className={styles.productList}>
      {props.products.map(function (product) {
        productInCart = props.itemsInCart.includes(product.id);

        return (
          <li key={product.id} className={styles.productListItem}>
            <Product
              {...product}
              productInCart={productInCart}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
            />
          </li>
        );
      })}
    </ul>
  );
}

interface Props {
  products: Book[];
  itemsInCart: string[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export default ProductList;
