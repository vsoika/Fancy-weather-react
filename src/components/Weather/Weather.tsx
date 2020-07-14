import React, { Component } from 'react';
import WeatherToday from '../WeatherToday';
import { DARKSKY_API_KEY } from '../../constants';
import WeatherNextDays from '../WeatherNextDays';
import CoordinatesByCity from '../CoordinatesByCity';

const US_COUNTRY_UNITS = 'us';

interface IWeatherProps {
  lat: string;
  long: string;
  isCelsius: boolean;
  language: string;
}

interface IWeatherStates {
  currentWeatherData: {};
  nextDaysWeatherData: object[];
  isUsCountryUnits: boolean;
}

class Weather extends Component<IWeatherProps, IWeatherStates> {
  state = {
    currentWeatherData: {},
    nextDaysWeatherData: [],
    isUsCountryUnits: false,
  };

  async componentDidMount() {
    const { lat, long, language } = this.props;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=auto&exclude=hourly&lang=${language}`;

    const res = await fetch(proxyUrl + targetUrl);
    const data = await res.json();
    const isUsCountryUnits = data.flags.units;

    isUsCountryUnits === US_COUNTRY_UNITS
      ? this.setState({ isUsCountryUnits: true })
      : this.setState({ isUsCountryUnits: false });

    console.log(data);

    this.setState({
      currentWeatherData: data.currently,
      nextDaysWeatherData: data.daily.data,
    });
  }

  async componentDidUpdate(prevProps: any) {
    const { lat, long, language } = this.props;

    if (lat !== prevProps.lat || language !== prevProps.language) {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=auto&exclude=hourly&lang=${language}`;

      const res = await fetch(proxyUrl + targetUrl);
      const data = await res.json();
      const isUsCountryUnits = data.flags.units;

      isUsCountryUnits === US_COUNTRY_UNITS
        ? this.setState({ isUsCountryUnits: true })
        : this.setState({ isUsCountryUnits: false });

      console.log(data, isUsCountryUnits);

      this.setState({
        currentWeatherData: data.currently,
        nextDaysWeatherData: data.daily.data,
      });
    }
  }

  getIcon = (iconName: string) => {
    const convertIconName = iconName.toUpperCase().replace(/-/g, '_');

    return convertIconName;
  };

  convertToFahrenheit(convertValue: number) {
    const temperature = `${Math.round(convertValue * 1.8 + 32)}°`;
    return temperature;
  }

  convertToCelsius(convertValue: number) {
    const temperature = `${Math.round((convertValue - 32) / 1.8)}°`;
    return temperature;
  }

  render() {
    const {
      currentWeatherData,
      nextDaysWeatherData,
      isUsCountryUnits,
    } = this.state;
    const { isCelsius, language } = this.props;

    console.log(currentWeatherData);

    return (
      <>
        {currentWeatherData ? (
          <WeatherToday
            data={currentWeatherData}
            getIcon={this.getIcon}
            convertToFahrenheit={this.convertToFahrenheit}
            convertToCelsius={this.convertToCelsius}
            isCelsius={isCelsius}
            isUsCountryUnits={isUsCountryUnits}
          />
        ) : null}
        {nextDaysWeatherData ? (
          <WeatherNextDays
            data={nextDaysWeatherData}
            getIcon={this.getIcon}
            convertToFahrenheit={this.convertToFahrenheit}
            convertToCelsius={this.convertToCelsius}
            isCelsius={isCelsius}
            language={language}
            isUsCountryUnits={isUsCountryUnits}
          />
        ) : null}
      </>
    );
  }
}

export default Weather;
