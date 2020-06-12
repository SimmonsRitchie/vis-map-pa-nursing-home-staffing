import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const Title = ({title}) => {
  return ( 
    <div className="range-slider__title-container">
      <span>
        <span className="has-text-weight-semibold">{title}:</span>
      </span>
  </div> );
}
 
export default Title;