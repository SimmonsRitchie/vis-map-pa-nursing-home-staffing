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

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='range-slider__container'>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}



export default RangeSlider