import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

test("testing ProductList Componemt", () => {
  const products = [
    {
      id: "2",
      title: "Fairy tales",
      author: "Hans Christian Andersen",
      published: "1835-37",
      country: "Denmark",
      lang: "Danish",
      pages: "784",
      image: "fairy-tales.jpg",
      url: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
      price: "5",
    },
  ];
  render(
    <ProductList
      products={products}
      itemsInCart={[]}
      addToCart={jest.fn}
      removeFromCart={jest.fn}
    />
  );
  expect(screen.getByText(/Hans Christian Andersen/)).toBeInTheDocument();
});
