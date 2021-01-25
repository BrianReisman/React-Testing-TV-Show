import React from "react";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import Episodes from "./Episodes";

test("component renders properly (sanity check)", () => {
  render(<Episodes episodes={[]} />);
});

const episodeData = [
  {
    id: 123,
    image: 234,
    name: "test",
    season: "testSeason",
    number: 345,
    summary: "stuff happens",
    runtime: 60,
  },
  {
    id: 98,
    image: 987,
    name: "test",
    season: "test2Season",
    number: 876,
    summary: "stuff happens",
    runtime: 765,
  },
];

test("If passed an episode object in array it is in the document", () => {
  render(<Episodes episodes={episodeData} />);

  //Act - get
  const episodesAll = screen.getAllByText(/minuteS/i);
  const episode = screen.getByText(/testSeason/i);

  //Assert
  expect(episode).toBeInTheDocument();
  expect(episodesAll).toHaveLength(2);
});

// test("select from dropdown", () => {
//   render(<Episodes episodes={episodeData} />);

//   //Act - get
//   const episodesAll = screen.getAllByText(/mInUteS/i);
//   const episode = screen.getByText(/TEsTSeason/i);

//   //Assert
//   expect(episode).toBeInTheDocument();
//   expect(episodesAll).toHaveLength(2);
// });
