import React from 'react';
import {Pane, CircleMarker } from "react-leaflet";
import PropTypes from 'prop-types'

const IconLayer = ({iconData, propertyID}) => {

  return ( 
    <Pane name="icons" style={{ zIndex: 500 }}>
      {iconData.map(datum => {
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
  iconData: PropTypes.objectOf(PropTypes.any).isRequired,
  propertyID: PropTypes.string.isRequired
}


export default IconLayer;