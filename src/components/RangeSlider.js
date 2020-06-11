import React, { Component } from "react";
import Slider from "react-rangeslider";
import 'react-rangeslider/lib/index.css'
import PropTypes from 'prop-types';
import SliderLabels from "./SliderLabels";

class RangeSlider extends Component {

  render () {
    const { minRange, maxRange, rangeValue, handleChange} = this.props
    const labels = [
     { text: 'Required minimum', value: 2.7},
     { text: 'Recommended', value: 4.1},
    ]

    return (
      <div className='range-slider__container'>
        <Slider
          min={minRange}
          max={maxRange}
          value={rangeValue}
          format={value => `${value.toFixed(1)} hprd`}
          step={0.1}
          onChange={handleChange}
        />
        <SliderLabels labels={labels} range={maxRange - minRange} minRange={minRange}/>

      </div>
    )
  }
}

RangeSlider.propTypes = {
  rangeValue: PropTypes.number.isRequired,
  minRange: PropTypes.number.isRequired,
  maxRange: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default RangeSlider