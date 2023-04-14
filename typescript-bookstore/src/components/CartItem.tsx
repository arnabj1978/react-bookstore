function CartItem(props: Props) {
  const { title, price } = props;
  return (
    <div>
      {title} - {price}
    </div>
  );
}

interface Props {
  title: string;
  price: string | undefined;
}

export default CartItem;
