import React from "react";
import * as d3 from "d3";
import styled from "styled-components";
import withResponsiveContainer from "./withResponsiveContainer"


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
    const { type, scale, width, height, marginLeft, marginRight } = this.props;
    const adjustedWidth = width - (marginLeft + marginRight);
    scale.range([0,adjustedWidth])
    d3.select(this.gRef.current).call(d3[`axis${type}`](scale).tickValues([2, 2.5, 3, 3.5, 4, 4.5, 5]));
  }

  render() {
    const { marginLeft, label, height } = this.props;

    return (
      <g ref={this.gRef} transform={`translate(${marginLeft}, ${height})`} className="range-slider__axis">
      </g>
    );
  }
}

const ResponsiveAxis = withResponsiveContainer(Axis, { height: 20, margin: { top: 0, bottom: 0, right: 0, left: 0}})


export default ResponsiveAxis;
