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

  getCityName = (cityName: string) => {
    console.log(cityName, cityTimezones.lookupViaCity(cityName)[0].timezone);
    this.setState({
      city: cityName,
      timezone: cityTimezones.lookupViaCity(cityName)[0].timezone,
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

    return (
      <>
        <Header
          activateCelsius={this.activateCelsius}
          activateFahrenheit={this.activateFahrenheit}
        />

        <main>
          <div className="city-container">
            <CountryAndCity getCityName={this.getCityName} />
            {timezone ? <CurrentDate timezone={timezone} /> : null}
          </div>
          {latitude ? (
            <Weather lat={latitude} long={longitude} isCelsius={isCelsius} />
          ) : null}

          {city ? (
            <CoordinatesByCity
              searchCity={city}
              getCoordinates={this.getCoordinates}
            />
          ) : null}
        </main>
      </>
    );
  }
}

export default App;
