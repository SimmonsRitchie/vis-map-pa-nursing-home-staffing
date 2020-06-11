import React from "react";
import LeafletMap from "./LeafletMap";
import PropTypes from "prop-types";
import RangeSlider from "./RangeSlider";
import { max, min } from "d3-array";
import createArrFromGeoJson from '../utils/createArrFromGeoJson'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: 2,
      minRange: null,
      maxRange: null,
      filteredData: []
    };
  }

  componentDidMount() {
    const { nursingHomes } = this.props.data;
    const filteredData = nursingHomes.features.map(feature => feature)
    const arrTotalHrs = createArrFromGeoJson(nursingHomes, "total_hprd");
    console.log(arrTotalHrs)
    const minRange = min(arrTotalHrs);
    const maxRange = max(arrTotalHrs);
    this.setState({
      minRange,
      maxRange,
      filteredData
    });
  }

  handleChange = (value) => {
    this.setState({
      rangeValue: value,
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
