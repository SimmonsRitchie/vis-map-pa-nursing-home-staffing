import { csv, json } from "d3-fetch";

export const loadData = () => {
  /* Fetch and parse files.*/
  return Promise.all([
    import( "~/data/pa_nursing_homes.json"),
  ]).then(([nursingHomes]) => {
    console.log(nursingHomes);
  })
};
