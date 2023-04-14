import PropTypes from "prop-types";
import styles from "./Product.module.css";

function Product(props: Props) {
  const {
    title,
    author,
    published,
    country,
    lang,
    pages,
    image,
    url,
    price,
    productInCart,
  } = props;

  function handleClick(productInCart: boolean) {
    if (productInCart) {
      props.removeFromCart(props.id);
    } else {
      props.addToCart(props.id);
    }
  }

  return (
    <div className={styles.product}>
      <img
        className={styles.thumbnail}
        src={image ? "/images/" + image : "/images/default.jpg"}
        alt={title}
      ></img>
      <h2>{title}</h2>
      <div>by: {author}</div>
      <div>
        published: {published}, {country}
      </div>
      <div>language: {lang}</div>
      <div>pages: {pages}</div>
      <div>price: ${price}</div>
      <a href={url}>link</a>
      <br />
      <button onClick={() => handleClick(props.productInCart)}>
        {productInCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

interface Props {
  id: string;
  title: string;
  author: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price?: string;
  productInCart: boolean;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export default Product;
