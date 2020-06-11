import React from 'react';
import {Pane, CircleMarker } from "react-leaflet";
import PropTypes from 'prop-types'

const IconLayer = ({geoJsonData}) => {

  return ( 
    <Pane name="icons" style={{ zIndex: 500 }}>
      {geoJsonData.features.map(datum => {
        const { properties, geometry } = datum;
        const { coordinates } = geometry
        return (
          <CircleMarker 
            key={properties.address}
            center={[coordinates[1], coordinates[0]]}
            radius={1.5}
          />)
      })}
    </Pane>
  );
}

IconLayer.propTypes = {
  geoJsonData: PropTypes.objectOf(PropTypes.any).isRequired,
}


export default IconLayer;