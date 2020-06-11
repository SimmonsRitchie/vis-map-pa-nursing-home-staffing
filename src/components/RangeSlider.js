import React, { Component } from "react";
import Slider from "react-rangeslider";
import 'react-rangeslider/lib/index.css'
import PropTypes from 'prop-types';

class RangeSlider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 10
    }
  }

  render () {
    const { minRange, maxRange, rangeValue, handleChange} = this.props
    const horizontalLabels = {
      2.7: 'Pa minimum',
      4.1: 'recommended',
    }
    return (
      <div className='range-slider__container'>
        <Slider
          min={minRange}
          max={maxRange}
          value={rangeValue}
          labels={horizontalLabels}
          format={value => value.toFixed(1)}
          step={0.1}
          onChange={handleChange}
        />
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