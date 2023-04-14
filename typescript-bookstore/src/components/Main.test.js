import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("Main JS", () => {
  render(<Main />);
  const linkElement = screen.getByText(/We have several books/i);
  expect(linkElement).toBeInTheDocument();
});
