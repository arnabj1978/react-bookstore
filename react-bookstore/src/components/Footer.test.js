import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer JS", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
