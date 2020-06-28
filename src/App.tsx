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
    inputCity: '',
    language: 'en',
  };

  getCityName = (currentCity: string, inputCity: string) => {
    this.setState({
      city: inputCity ? inputCity : currentCity,
      inputCity: inputCity,
    });
  };

  getCoordinates = (lat: string, long: string, timezone: string) => {
    this.setState({
      latitude: lat,
      longitude: long,
      timezone: timezone,
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

  setLanguage = (lang: string) => {
    this.setState({
      language: lang,
    });
  };

  render() {
    const {
      city,
      timezone,
      latitude,
      longitude,
      isCelsius,
      inputCity,
      language,
    } = this.state;
    console.log('App lang: ', language);

    return (
      <>
        <Header
          activateCelsius={this.activateCelsius}
          activateFahrenheit={this.activateFahrenheit}
          getCityName={this.getCityName}
          setLanguage={this.setLanguage}
        />

        <main>
          <div className="city-container">
            <div className="city-container_wrapper">
              <CountryAndCity
                getCityName={this.getCityName}
                inputCity={inputCity}
                language={language}
              />
              {city ? (
                <CoordinatesByCity
                  searchCity={city}
                  getCoordinates={this.getCoordinates}
                  language={language}
                />
              ) : null}
            </div>

            {timezone ? <CurrentDate timezone={timezone} /> : null}
          </div>
          {latitude ? (
            <Weather
              lat={latitude}
              long={longitude}
              isCelsius={isCelsius}
              language={language}
            />
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
