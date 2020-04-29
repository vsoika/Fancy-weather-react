import React, { Component } from 'react';
import './App.scss';
import CountryAndCity from './components/CountryAndCity/CountryAndCity';
import CurrentDate from './components/CurrentDate';
import CoordinatesByCity from './components/CoordinatesByCity';
import Weather from './components/Weather';
import cityTimezones from 'city-timezones';
import Header from './components/Header';

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
        <Header />

        <main>
          <div className="city-container">
            <CountryAndCity getCityName={this.getCityName} />
            <CurrentDate timezone={timezone} />
          </div>
          {latitude ? <Weather lat={latitude} long={longitude} /> : null}

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
