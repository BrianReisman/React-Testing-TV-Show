import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render, waitFor } from "@testing-library/react";

import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
// import { formatSeasons } from "./utils/formatSeasons";

test("Check component renders, sanity test", () => {
  render(<App />);
});

// jest.mock('./api/fetchShow.js');
test("Displays episode info when dropdown item is selected", async () => {
  // mockFetchShow.mockResolvedValueOnce({
  //   data: {
  //     name: "asdf",
  //     summary: "asdf",
  //     _embedded: {
  //       episodes: [{}, {}],
  //     },
  //   },
  // });

//!FindbyTExt has someone built in await.

  render(<App />);

  const dropdown = await screen.findByText(/Select a season/i);
  userEvent.click(dropdown)
  const season1 = await screen.findByText(/season 1/i)
  userEvent.click(season1)
  const card = await screen.findByText(/Chapter Two: The Weirdo on MAPLE Street/i)
  //assert
  expect(card).toBeInTheDocument();
});

//1 import the api you have extracted to its own file. Since it is a named export rename it with alias itentifying it is going to be mocked.
//2 jest.mock('relative path to file that houses what is being mocked') ie. jest.mock("./api/fetchMissions.js"); *outside of your test*
//3 inside of your test at the top, call .mockResolvedValue() *on* your imported API's alias. This method takes a return that mirrors in structure the return you expect to get from your API, ie. an array of objects each with properties a, b, and c.
