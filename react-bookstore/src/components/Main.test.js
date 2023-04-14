import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("Main JS", () => {
  render(
    <Main
      products={[{ title: "this is test", price: "0" }]}
      itemsInCart={[]}
      addToCart={jest.fn}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/this is test/)).toBeInTheDocument();
});
