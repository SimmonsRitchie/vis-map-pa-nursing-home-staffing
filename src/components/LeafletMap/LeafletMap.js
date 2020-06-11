import React from "react";
import { Map, TileLayer, GeoJSON, Pane, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet'
import PropTypes from 'prop-types';
import IconLayer from "./IconLayer";

const PA_BOUNDS = [
  [42.505, -80],
  [39, -75],
];
const DARK = '#222222';

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  geoJSONStylePlain() {
    return {
      color: 'white',
      weight: 0.6,
      fillOpacity: 0.05,
      fillColor: DARK,
    };
  }

  render() {
    const { geoData, iconData } = this.props
    return (
      <div className="leaflet-map__container-outer">
        <Map bounds={PA_BOUNDS} zoom={5} className="leaflet-map__container-inner">
          <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}${
            L.Browser.retina ? '@2x.png' : '.png'
          }`}
          attribution={
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }
          subdomains="abcd"
          maxZoom={20}
          minZoom={0}
          />
          <Pane
            // Note: We use panes and adjust zIndex so that labels appear above geoJSON but
            // beneath bubbles
            name="labels"
            style={{ zIndex: 450, pointerEvents: 'none' }}
          >
            <TileLayer
              url={`https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}${
                L.Browser.retina ? '@2x.png' : '.png'
              }`}
              attribution={
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
              }
              subdomains="abcd"
              maxZoom={20}
              minZoom={0}
            />
          </Pane>
          <GeoJSON
          // NOTE: geoJSON needs a unique key in order for it to update when data changes
            data={geoData}
            style={this.geoJSONStylePlain}
          />
          <IconLayer iconData={iconData} propertyID="provnum"/>
        </Map>
      </div>
    );
  }
}


LeafletMap.propTypes = {
  geoData: PropTypes.objectOf(PropTypes.any).isRequired,
  iconData: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default LeafletMap;
