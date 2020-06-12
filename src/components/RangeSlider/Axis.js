import React from "react";
import * as d3 from "d3";
import withResponsiveContainer from "./withResponsiveContainer"
import PropTypes from 'prop-types';

class Axis extends React.Component {
  constructor() {
    super();
    this.gRef = React.createRef();
  }

  componentDidUpdate() {
    this.d3Render();
  }

  componentDidMount() {
    this.d3Render();
  }

  d3Render() {
    const { type, scale, width, marginLeft, marginRight } = this.props;
    const adjustedWidth = width - (marginLeft + marginRight);
    scale.range([0,adjustedWidth])
    d3.select(this.gRef.current).call(d3[`axis${type}`](scale).tickValues([2, 2.5, 3, 3.5, 4, 4.5, 5]));
  }

  render() {
    const { marginLeft, height } = this.props;

    return (
      <g ref={this.gRef} transform={`translate(${marginLeft}, ${height})`} className="range-slider__axis">
      </g>
    );
  }
}

const ResponsiveAxis = withResponsiveContainer(Axis, { height: 20, margin: { top: 0, bottom: 0, right: 0, left: 0}})


Axis.propTypes = {
  type: PropTypes.string.isRequired,
  scale: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  marginLeft: PropTypes.number.isRequired,
  marginRight: PropTypes.number.isRequired
}

export default ResponsiveAxis;

