import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header js", () => {
  render(<Header />);
  const linkElement = screen.getByText(/React Bookstore/i);
  expect(linkElement).toBeInTheDocument();
});
