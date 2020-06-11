import React from 'react';
import {Pane, CircleMarker } from "react-leaflet";
import PropTypes from 'prop-types'

const IconLayer = ({geoJsonData, propertyID}) => {

  return ( 
    <Pane name="icons" style={{ zIndex: 500 }}>
      {geoJsonData.features.map(datum => {
        const { properties, geometry } = datum;
        const { coordinates } = geometry
        return (
          <CircleMarker 
            key={properties[propertyID]}
            center={[coordinates[1], coordinates[0]]}
            radius={1.5}
          />)
      })}
    </Pane>
  );
}

IconLayer.propTypes = {
  geoJsonData: PropTypes.objectOf(PropTypes.any).isRequired,
  propertyID: PropTypes.string.isRequired
}


export default IconLayer;