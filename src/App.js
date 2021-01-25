import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";
import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";
import { fetchShow } from "./api/fetchShow";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];
  console.log(show);

  // useEffect(() => {
  //   fetchShow(setShow, setSeasons);
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchShow();
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
      } catch (err) {
        console.log(err);
      }
    };
    getData(); //* you need to call this to invoke it in useEffect
  }, []);

//* could also do fetchShow().then().catch inside useEffect instead of try/catch
//* you always want await to be in front of a Promise.
  
  const handleSelect = (e) => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
