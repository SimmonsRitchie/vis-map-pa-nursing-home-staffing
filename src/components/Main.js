import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {pymSendHeight} from '../utils/handlePym'
import PropTypes from 'prop-types';
import Subtitle from "./Subtitle"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countNursingHomes: 0,
      totalNursingHomes: 0,
      rangeValue: 4.1
    };
  }
  componentDidMount() {
    // This is intended to fix bug where app is clipped at bottom
    // on initial load.
    pymSendHeight({timeout: 500})
    pymSendHeight({timeout: 1000})
  }

  componentDidUpdate() {
    // Because our app changes height based on displayed content, we 
    // update the iframe height after DOM elements have been updated.
    pymSendHeight()
  }

  updateHeaderProps = ({countNursingHomes, totalNursingHomes, rangeValue}) => {
    this.setState({
      countNursingHomes,
      totalNursingHomes,
      rangeValue,
    })
  }

  render() {
    const { data } = this.props
    const { countNursingHomes, totalNursingHomes, rangeValue} = this.state
    const subtitle = <Subtitle countNursingHomes={countNursingHomes} totalNursingHomes={totalNursingHomes} rangeValue={rangeValue}/>
    return (
      <div className="container__outer">
        <div className="container__inner">
        <Header 
          headline="Where are Pa.'s best staffed nursing homes?"
          subtitle={subtitle}
        />
        <Body data={data} updateHeaderProps={this.updateHeaderProps}/> 
        <Footer 
          byline="Daniel Simmons-Ritchie"
          footnote="'Hours per resident day' is a common metric used to measure nursing home staffing. It's calculated by dividing the number of hours working by direct care nursing home workers by the number of residents in a facility. Please note some facilities have been excluded from this map because staffing data was unavailable or they had extremely low staffing hours, indicating potential data errors."
          source="COVID-19 data from the Pa. Department of Health; Nursing Home staffing from the Centers for Medicare and Medicaid Services from Dec, 2019"
          outlet="Spotlight PA"
          outletUrl="https://www.spotlightpa.org/"
        />
        </div>
      </div>
    );
  }
}




Main.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
}


export default Main;
