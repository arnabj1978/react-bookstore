import Product from "./Product";
import styles from "./ProductList.module.css";
import PropTypes from "prop-types";
import { productsType } from "../types";

function ProductList(props) {
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

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  itemsInCart: PropTypes.array.isRequired,
  products: productsType,
};

ProductList.defaultProps = {
  itemsInCart: [],
  products: [],
};

export default ProductList;
