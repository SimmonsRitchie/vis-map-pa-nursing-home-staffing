import React from 'react';
import {Pane, CircleMarker, Tooltip } from "react-leaflet";
import PropTypes from 'prop-types'
import MapTooltip from './MapTooltip';

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
          >
            <Tooltip direction="auto" offset={[-8, -2]} opacity={1}>
              <MapTooltip properties={properties} />
            </Tooltip>
          </CircleMarker>
    
          )
      })}
    </Pane>
  );
}

IconLayer.propTypes = {
  iconData: PropTypes.arrayOf(PropTypes.object).isRequired,
  propertyID: PropTypes.string.isRequired
}


export default IconLayer;