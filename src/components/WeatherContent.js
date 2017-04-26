import React, { PropTypes } from 'react';
import places from '../constants/Places';

const WeatherContent = React.createClass({

  propTypes: {
    palceName: PropTypes.string.isRequired
  },

  render(){
    const { placeName } = this.props;


    return(
      <div className="weather-content">
       <h2>Weather in {placeName}</h2>
      </div>
    );
   }
 });

export default WeatherContent;
