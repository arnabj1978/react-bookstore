import PropTypes from "prop-types";
import styles from "./Product.module.css";

function Product(props) {
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

  function handleClick(e) {
    console.log(e.target.textContent);
    if (e.target.textContent.includes("In Cart")) {
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
      <button onClick={handleClick}>
        {productInCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

Product.defaultProps = {
  title: "",
  author: "",
  published: "",
  country: "",
  lang: "",
  pages: 0,
  image: "",
  url: "",
  price: 0,
};
export default Product;
