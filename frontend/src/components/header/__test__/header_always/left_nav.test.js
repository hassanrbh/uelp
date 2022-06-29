import { render, screen } from "@testing-library/react";
import LeftNav from "../../left_nav";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom';

test("left navigation is showing a logo of the business", () => {
  render(<MemoryRouter>
      <LeftNav />
    </MemoryRouter>);
  const getLogo = screen.getByRole("img");
  expect(getLogo).toBeInTheDocument();
});