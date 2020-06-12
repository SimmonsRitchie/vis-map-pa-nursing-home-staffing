import React from "react";
import LeafletMap from "./LeafletMap";
import PropTypes from "prop-types";
import RangeSlider from "./RangeSlider";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: 4.1,
      minRange: 2,
      maxRange: 5,
      iconData: [],
      filteredData: []
    };
  }

  componentDidMount() {
    const { nursingHomes } = this.props.data;
    const {updateHeaderProps} = this.props
    const { minRange, rangeValue } = this.state
    const iconData = nursingHomes.features.map(feature => feature)
    const cleanIconData = iconData.filter(feature => +feature.properties.total_hprd > minRange)
    const filteredData = cleanIconData.filter( feature => feature.properties.total_hprd > rangeValue)
    const countNursingHomes = filteredData.length
    const totalNursingHomes = cleanIconData.length
    updateHeaderProps({
      countNursingHomes,
      totalNursingHomes,
      rangeValue
    })
    this.setState({
      iconData: cleanIconData,
      filteredData
    });
  }


  handleChange = (value) => {
    const { iconData } = this.state
    const { updateHeaderProps } = this.props
    const filteredData = iconData.filter( feature => feature.properties.total_hprd > value)
    const countNursingHomes = filteredData.length
    const totalNursingHomes = iconData.length
    updateHeaderProps({countNursingHomes, totalNursingHomes, rangeValue: value})
    this.setState({
      rangeValue: value,
      filteredData
    });
  };

  render() {
    const { rangeValue, minRange, maxRange, filteredData, iconData } = this.state;
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
