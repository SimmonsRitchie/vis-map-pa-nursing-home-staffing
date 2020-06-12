import React from "react";

const Subtitle = ({ countNursingHomes, totalNursingHomes, rangeValue }) => {
  const cleanRangeValue = rangeValue.toFixed(1);
  const percent = ((countNursingHomes / totalNursingHomes) * 100).toFixed(1);
  return (
    <span>
      In Pennsylvania, <H>{countNursingHomes}</H> of {totalNursingHomes}{" "}
      nursing homes (<H>{percent}%</H>) provide an average of at least <H>{cleanRangeValue}</H> hours of
      care per resident per day. Experts recommend at least 4.1 for safe care.
      Adjust the slider to see where the best staffed homes
      are in your area.
    </span>
  );
};

const H = ({ children }) => {
  return <span className="subtitle__highlight">{children}</span>;
};

export default Subtitle;
