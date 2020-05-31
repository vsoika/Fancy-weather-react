import React, { Component } from 'react';
import CountryAndCity from './components/CountryAndCity/CountryAndCity';
import CurrentDate from './components/CurrentDate';
import CoordinatesByCity from './components/CoordinatesByCity';
import Weather from './components/Weather';
import cityTimezones from 'city-timezones';
import Header from './components/Header';

import './App.scss';

class App extends Component {
  state = {
    city: '',
    timezone: '',
    latitude: '',
    longitude: '',
    isCelsius: true,
  };

  getCityName = (currentCity: string, inputCity: string) => {
    // console.log(currentCity, inputCity, cityTimezones.lookupViaCity(inputCity)[0].country);
    
    this.setState({
      city: inputCity ? inputCity : currentCity,
      timezone: cityTimezones.lookupViaCity(inputCity ? inputCity : currentCity)[0].timezone,
    });
  };

  getCoordinates = (lat: string, long: string) => {
    this.setState({
      latitude: lat,
      longitude: long,
    });
  };

  activateCelsius = () => {
    this.setState({
      isCelsius: true,
    });
  };

  activateFahrenheit = () => {
    this.setState({
      isCelsius: false,
    });
  };

  render() {
    const { city, timezone, latitude, longitude, isCelsius } = this.state;
    let inputCountry = '';

    if(city) {
       inputCountry = cityTimezones.lookupViaCity(city)[0].country;
    }
    
    return (
      <>
        <Header
          activateCelsius={this.activateCelsius}
          activateFahrenheit={this.activateFahrenheit}
          getCityName={this.getCityName}
        />

        <main>
          <div className="city-container">
            <div className="city-container_wrapper">
              <CountryAndCity getCityName={this.getCityName}/>
              {city ? (
                <CoordinatesByCity
                  searchCity={city}
                  getCoordinates={this.getCoordinates}
                />
              ) : null}
            </div>

            {timezone ? <CurrentDate timezone={timezone} /> : null}
          </div>
          {latitude ? (
            <Weather lat={latitude} long={longitude} isCelsius={isCelsius} />
          ) : null}
        </main>

        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </>
    );
  }
}

export default App;
