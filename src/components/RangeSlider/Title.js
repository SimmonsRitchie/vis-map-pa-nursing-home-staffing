import React from "react";

const Title = ({ title }) => {
  return (
    <div className="range-slider__title-container">
      <span>
        <span className="has-text-weight-semibold">{title}:</span>
      </span>
    </div>
  );
};

export default Title;
