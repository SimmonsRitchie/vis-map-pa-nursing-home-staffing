import React from "react";
import PropTypes from "prop-types";

const Summary = ({ countNursingHomes, rangeValue }) => {
  const cleanRangeValue = rangeValue.toFixed(1);
  return (
    <div className="summary__container">
      Nursing homes: {countNursingHomes}
    </div>
  );
};

Summary.propTypes = {
  countNursingHomes: PropTypes.number,
  rangeValue: PropTypes.number,
};

export default Summary;
