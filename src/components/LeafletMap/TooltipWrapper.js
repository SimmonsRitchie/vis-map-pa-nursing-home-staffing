import React from 'react';
import PropTypes from 'prop-types';

const TooltipWrapper = ({ label, subLabel, children }) => (
  <div className="leaflet-map-tooltip__container">
    <div className="leaflet-map-tooltip__label-container">
      {label && <div className="leaflet-map-tooltip__label">{label}</div>}
      {subLabel && <div className="leaflet-map-tooltip__sub-label">{subLabel}</div>}
    </div>
    {children}
  </div>
);

TooltipWrapper.defaultProps = {
  label: null,
};

TooltipWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  label: PropTypes.string,
};


export default TooltipWrapper;
