export function cart(state = { items: [] }, action = {}) {
  switch (action.type) {
    case "CART_ADD":
      const newCart = [...state.items, action.payload.productId];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        items: newCart,
      };
    case "CART_REMOVE":
      const newRemovedCart = state.items.filter(
        (id) => id !== action.payload.productId
      );
      localStorage.setItem("cart", JSON.stringify(newRemovedCart));
      return {
        ...state,
        items: newRemovedCart,
      };
    case "CHECKOUT/fulfilled":
      return {
        ...state,
        items: [],
      };
    case "READ_CART":
      let cart = localStorage.getItem("cart");
      cart = JSON.parse(cart);
      return {
        ...state,
        items: cart || [],
      };
    default:
      return state; //no relevant action type
  }
}

export function products(state = { products: [] }, action = {}) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state; //no relevant action type
  }
}
