import React from "react";
import PropTypes from "prop-types";

const SliderLabels = ({labels, range, minRange}) => {
  return (
    <div className={"slider-labels__container"}>
        <div className={"slider-labels__container-inner"}>
        {labels.map(label => {
          const {text, value} = label
          const leftPos = ((value - minRange) / range) * 100
          return (
            <LabelBox key={text} text={text} leftPos={leftPos}/>
          )
        })}
      </div>
    </div>
  );
};



const LabelBox = ({ leftPos, text }) => {
  const style = {
    left: `${leftPos}%`
  }
  return <div className="slider-labels__box-container" style={style}>
    <div className="slider-labels__box">{text}</div>
  </div>;
};

SliderLabels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object).isRequired,
  range: PropTypes.number.isRequired,
  minRange: PropTypes.number.isRequired
}

export default SliderLabels;
