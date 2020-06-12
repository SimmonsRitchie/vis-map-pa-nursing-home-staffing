import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {pymSendHeight} from '../utils/handlePym'
import PropTypes from 'prop-types';

class Main extends React.Component {

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

  render() {
    const { data } = this.props
    return (
      <div className="container__outer">
        <div className="container__inner">
        <Header 
          headline="Where are the best staffed homes?"
          subtitle="Only about a quarter of Pennsylvania's 700 nursing homes meet staffing levels recommended by experts for safe care. Adjust the slider to see where the best staffed homes are located in your community."
        />
        <Body data={data} /> 
        <Footer 
          byline="Daniel Simmons-Ritchie"
          source="COVID-19 data from the Pa. Department of Health; Nursing Home staffing from the Centers for Medicare and Medicaid Services"
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
