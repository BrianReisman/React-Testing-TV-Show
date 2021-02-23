import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { fetchShow as mockFetchShow } from "./api/fetchShow.js";

import App from "./App";

//mock fetchShow
// const mochFetchShow = jest.fn();
// jest.mock("./api/fetchShow.js"); //*short stop! Intercept empty function, we still need the promise which we mock inside the tesk


test("renders without errors", async () => {
  render(<App />);

  const dropdown = await screen.findByText(/Select a season/i);
  userEvent.click(dropdown)
  const season2 = await screen.findByText(/season 2/i)
  userEvent.click(season2)
  const card = await screen.findByText(/madmax/i)
  expect(card).toBeInTheDocument();
});
