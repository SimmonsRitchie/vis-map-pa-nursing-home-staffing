import React, { Component } from "react";
import Slider from "react-rangeslider";
import PropTypes from "prop-types";
import SliderLabels from "./SliderLabels";
import Axis from "./Axis";
import * as d3 from 'd3'
import Title from "./Title";

class RangeSlider extends Component {
  render() {
    const { minRange, maxRange, rangeValue, handleChange } = this.props;
    const labels = [
      { text: "Pa. required minimum", value: 2.7 },
      { text: "Recommended", value: 4.1 },
    ];
    const scale = d3.scaleLinear()
    .domain([minRange, maxRange])
    // .range([0, 100000]);
    return (
      <div className="range-slider__container">
        <Title title={"Total hours per resident day"}/>
        <Axis marginLeft={15} marginRight={15} type={"Top"} scale={scale}/>
        <Slider
          min={minRange}
          max={maxRange}
          value={rangeValue}
          format={(value) => `${value.toFixed(1)} hprd`}
          step={0.1}
          onChange={handleChange}
        />
        <SliderLabels
          labels={labels}
          range={maxRange - minRange}
          minRange={minRange}
        />
      </div>
    );
  }
}

RangeSlider.propTypes = {
  rangeValue: PropTypes.number.isRequired,
  minRange: PropTypes.number.isRequired,
  maxRange: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RangeSlider;
