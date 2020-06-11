const createArrFromGeoJson = (data, targetProperty) => {
  /**
   * Creates an array of properties from geoJson structured data
   */
  const arr = []
  data.features.forEach(feature => {
    const prop = feature.properties[targetProperty]
    if (prop) {
      arr.push(+prop)
    }})
  return arr
}
export default createArrFromGeoJson;