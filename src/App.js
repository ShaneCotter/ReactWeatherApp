import React, { Component } from 'react';
import logo from './img/weather.png';
import './App.css';
import common from './constants/Common';
import PlacesNav from './components/PlacesNav';
import WeatherContent from './components/WeatherContent';

const App = React.createClass ({

  getInitialState(){
    return{
      selectedPlaceCode: 'DUBLIN'
    }
  },

  onPlaceClick(placeCode){
    this.setState({
      selectedPlaceCode: placeCode
    })
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{common.APP_TITLE}</h2>
        </div>

        <PlacesNav onClick={this.onPlaceClick} />

        <WeatherContent placeName={this.state.selectedPlaceCode} />


      </div>
    );
  },
});

export default App;
