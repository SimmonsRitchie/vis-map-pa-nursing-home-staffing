import React, { Component } from "react";
import Svg from "./Svg";
import ChartContainer from "./ChartContainer";
import { throttle } from "throttle-debounce";

function withResponsiveContainer(
  ChartComponent, 
  {margin={
    top: 50, 
    right: 50, 
    bottom: 50, 
    left: 50 
  }, height=50}={}) {
  /*
   * A HOC that wraps a chart component with an svg element and a responsive container
   *
   * optional params:
   * @margin: Object in form {top: int, right: int, bottom: int, left: int}
   */
  return class ResponsiveContainer extends Component {
    constructor(props) {
      super(props);
      this.containerRef = React.createRef();
      this.state = {
        width: 0,
        height: 0
      };
      //! Important: must bind otherwise ref will be inacessible on event listener calls
      this.resize = this.resize.bind(this);
      // * We use throttle to improve performance
      this.throttledHandleWindowResize = throttle(300, this.resize);
    }

    componentDidMount() {
      // initial sizing
      this.resize();
      // resize if window changes
      window.addEventListener("resize", this.throttledHandleWindowResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.throttledHandleWindowResize);
    }

    resize() {
      const containerEl = this.containerRef.current;
      const width = containerEl.getBoundingClientRect().width;
      this.setState({
        width,
        height
      });
  }

    render() {
      const { width, height } = this.state;
      // const margin = { top: 50, right: 50, bottom: 50, left: 50 };
      return (
        <ChartContainer ref={this.containerRef}>
          <Svg width={width} height={height}>
            <ChartComponent
              x={margin.left}
              y={margin.top}
              height={height - (margin.top + margin.bottom)}
              width={width - (margin.left + margin.right)}
              {...this.props}
            />
          </Svg>
        </ChartContainer>
      );
    }
  };
}

export default withResponsiveContainer;
