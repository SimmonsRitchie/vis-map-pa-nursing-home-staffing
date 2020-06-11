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

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { minRange, maxRange, rangeValue, handleChange} = this.props
    return (
      <div className='range-slider__container'>
        <Slider
          min={minRange}
          max={maxRange}
          value={rangeValue}
          onChangeStart={this.handleChangeStart}
          onChange={handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{rangeValue}</div>
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