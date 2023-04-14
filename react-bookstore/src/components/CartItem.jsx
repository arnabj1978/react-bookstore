function CartItem(props) {
  const { title, price, id } = props;
  return (
    <div>
      <button onClick={() => props.removeFromCart(id)}>Remove</button>
      &nbsp;-&nbsp;
      {title} - {price}
    </div>
  );
}
export default CartItem;
