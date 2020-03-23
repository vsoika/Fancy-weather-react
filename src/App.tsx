import React, { Component } from 'react';
import './App.scss';
import CountryAndCity from './components/CountryAndCity/CountryAndCity';
import CurrentDate from './components/CurrentDate';
import CoordinatesByCity from './components/CoordinatesByCity';
import TodayWeather from './components/TodayWeather';
import cityTimezones from 'city-timezones';

class App extends Component {
  state = {
    city: '',
    timezone: '',
    latitude: '',
    longitude: '',
  };

  getCityName = (cityName: string) => {
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

  render() {
    const { city, timezone, latitude, longitude } = this.state;

    console.log(this.state.city);

    return (
      <>
        <CountryAndCity getCityName={this.getCityName} />
        <CurrentDate timezone={timezone} />
        {city ? (
          <CoordinatesByCity
            searchCity={city}
            getCoordinates={this.getCoordinates}
          />
        ) : null}
        {latitude ? <TodayWeather lat={latitude} long={longitude} /> : null}
      </>
    );
  }
}

export default App;
