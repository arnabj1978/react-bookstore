import { Link } from "react-router-dom";

function Header(prop) {
  const headerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <div>
      <h1>Welcome to React Bookstore</h1>
      <div>
        <Link to={""}>
          Home
          <img
            style={{ width: "20px", height: "16px" }}
            src={"/images/house-solid.svg"}
          ></img>
        </Link>
        &nbsp;|&nbsp;
        <Link to={"cart"}>
          Shopping cart: {prop.itemsInCart.length} items in
          <img
            style={{ width: "20px", height: "16px" }}
            src={"/images/cart-shopping-solid.svg"}
          ></img>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}
export default Header;
