import topoToGeo from "./topoToGeo";

export const loadData = () => {
  /* Fetch and parse files.*/
  return Promise.all([
    import("~/data/pa_nursing_homes_topo.json"),
    import("~/data/pa-county.json"),
  ]).then(([nursingHomes, paCounty]) => {
    const data = {}
    data["nursingHomes"] = topoToGeo(nursingHomes, "pa_nursing_homes")
    data["paCounties"] = topoToGeo(paCounty, "pa-county")
    return data
  })
};
