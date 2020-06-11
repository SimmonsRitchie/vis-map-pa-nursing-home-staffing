import React from "react";
import PropTypes from "prop-types";

const SliderLabels = ({labels, range, minRange}) => {
  return (
    <div className={"slider-labels__container"}>
        <div className={"slider-labels__container-inner"}>
        {labels.map(label => {
          const {text, value} = label
          const leftPos = ((value - minRange) / range) * 100
          console.log('leftPos',leftPos);
          return (
            <LabelBox key={text} text={text} leftPos={leftPos}/>
          )
        })}
      </div>
    </div>
  );
};

// 


const VertLine = ({leftPos}) => {
  const style = {
      borderLeft: "3px solid green",
      height: "10px",
      position: "absolute",
      left:  `${leftPos}%`,
      marginLeft: "-1px",
      top: 0,
  }
  return ( <div style={style} />);
}
 


const LabelBox = ({ leftPos, text }) => {
  const style = {
    left: `${leftPos}%`
  }
  return <div className="slider-labels__box-container" style={style}>
    <div className="slider-labels__box">{text}</div>
  </div>;
};

export default SliderLabels;
