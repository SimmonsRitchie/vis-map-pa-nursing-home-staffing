import React from "react";
import LeafletMap from "./LeafletMap"
import PropTypes from 'prop-types';
import RangeSlider from "./RangeSlider";

class Body extends React.Component {
  render() {
    const { nursingHomes, paCounties} = this.props.data
    return (
      <div className="body__container">
        <RangeSlider />
        <LeafletMap paCounties={paCounties} nursingHomes={nursingHomes}/>
      </div>
    );
  }
}

Body.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Body;
