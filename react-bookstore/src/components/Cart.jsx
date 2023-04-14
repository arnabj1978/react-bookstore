import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import PropTypes from "prop-types";

function Cart(props) {
  function calculateTotal(cartItems) {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      totalPrice = props.cartItems.reduce(function (total, current) {
        return total + parseFloat(current.price);
      }, 0);
    }
    return totalPrice;
  }

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <br />
      <ul>
        {props.cartItems.map(function (cartItem) {
          return (
            <li className={styles.CartItem}>
              <CartItem {...cartItem} removeFromCart={props.removeFromCart} />
            </li>
          );
        })}
      </ul>
      <br />
      <div>Total $: {calculateTotal(props.cartItems)} USD</div>
      <br />
      <div>
        <button onClick={() => props.submitCart(props.cartItems)}>
          Check Out
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

Cart.defaultProps = {
  cartItems: [],
};

export default Cart;
