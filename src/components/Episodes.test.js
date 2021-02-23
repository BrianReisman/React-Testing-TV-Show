import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Episodes from "./Episodes";
import App from '../App';

test("renders without errors", () => {
  render(<Episodes episodes={[{}, {}]} />);

  const cards = screen.queryAllByText(/, episode/i)
  expect(cards).toHaveLength(2);
});
