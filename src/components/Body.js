import React from "react";
import LeafletMap from "./LeafletMap";
import PropTypes from "prop-types";
import RangeSlider from "./RangeSlider";
import { max, min } from "d3-array";
import createArrFromGeoJson from '../utils/createArrFromGeoJson'
import simpleRound from '../utils/simpleRound'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: 0,
      minRange: 2,
      maxRange: 5,
      iconData: [],
      filteredData: []
    };
  }

  componentDidMount() {
    const { nursingHomes } = this.props.data;
    const iconData = nursingHomes.features.map(feature => feature)
    this.setState({
      rangeValue: 2,
      iconData,
      filteredData: iconData
    });
  }

  handleChange = (value) => {
    const { iconData } = this.state
    const filteredData = iconData.filter( feature => feature.properties.total_hprd > value)
    this.setState({
      rangeValue: value,
      filteredData
    });
  };

  render() {
    const { rangeValue, minRange, maxRange, filteredData } = this.state;
    const { paCounties } = this.props.data;
    return (
      <div className="body__container">
        <RangeSlider
          minRange={minRange}
          maxRange={maxRange}
          rangeValue={rangeValue}
          handleChange={this.handleChange}
        />
        <LeafletMap geoData={paCounties} iconData={filteredData} />
      </div>
    );
  }
}

Body.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Body;
