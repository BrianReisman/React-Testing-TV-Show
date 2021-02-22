import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("renders without errors", () => {
  const {rerender} = render(<App />);

  expect(screen.findByText(/stranger things/i));

  const btn = screen.findByRole("button")

});
