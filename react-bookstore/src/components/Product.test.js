import { screen, render, fireEvent } from "@testing-library/react";
import Product from "./Product";

test("testing product to have rendered with Fairy Tales", () => {
  render(
    <Product
      title="Fairy tales"
      productInCart={[]}
      addToCart={jest.fn}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/Fairy tales/)).toBeInTheDocument();
});

test("testing addToCart button when nothing is in the cart", () => {
  const addToCart = jest.fn;
  const removeFromCart = jest.fn;
  render(
    <Product
      title="this is test"
      productInCart={[]}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
  const button = screen.getAllByRole("button");
  fireEvent.click(button);
  expect(addToCart).toHaveBeenCalled();
});
