import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Book from "./Book";

function Cart(props: Props) {
  function calculateTotal(cartItems: (Book | undefined)[]) {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      totalPrice = props.cartItems.reduce(function (
        total: number,
        current: Book | undefined
      ) {
        const price =
          current === undefined
            ? 0
            : current.price == undefined
            ? 0
            : parseFloat(current.price);
        return total + price;
      },
      0);
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
            cartItem !== undefined && (
              <li className={styles.CartItem}>
                <CartItem title={cartItem.title} price={cartItem.price} />
              </li>
            )
          );
        })}
      </ul>
      <br />
      <div>Total $: {calculateTotal(props.cartItems)} USD</div>
    </div>
  );
}

interface Props {
  cartItems: (Book | undefined)[];
}

export default Cart;
