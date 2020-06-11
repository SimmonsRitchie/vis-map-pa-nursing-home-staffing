import React from "react";
import LeafletMap from "./LeafletMap"

class Body extends React.Component {
  render() {
    const { nursingHomes, paCounties} = this.props.data
    return (
      <div className="body__container">
        <LeafletMap paCounties={paCounties} />
      </div>
    );
  }
}

export default Body;
