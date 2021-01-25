import axios from "axios";
import { formatSeasons } from "../utils/formatSeasons";

// export const fetchShow = (showSetter, seasonSetter) => {
//   axios
//     .get(
//       "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//     )
//     .then(res => {
//       showSetter(res.data);
//       seasonSetter(formatSeasons(res.data._embedded.episodes));
//     });
// };

export const fetchShow = (showSetter, seasonSetter) => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then((res) => {
      console.log(res.data)
      return res;
    });
};
