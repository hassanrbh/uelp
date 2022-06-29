import { render, screen } from "@testing-library/react";
import HeaderLogin from "../HeaderLogin";
import '@testing-library/jest-dom';

test("you see login", () => {
  render(<HeaderLogin />)
  const header_element = screen.getByText("Header");
  expect(header_element).toBeInTheDocument();
})