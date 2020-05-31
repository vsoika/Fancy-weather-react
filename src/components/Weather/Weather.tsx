import React, { Component } from 'react';
import WeatherToday from '../WeatherToday';
import { DARKSKY_API_KEY } from '../../constants';
import WeatherNextDays from '../WeatherNextDays';
import CoordinatesByCity from '../CoordinatesByCity';

interface IWeatherProps {
  lat: string;
  long: string;
  isCelsius: boolean;
}

interface IWeatherStates {
  currentWeatherData: {};
  nextDaysWeatherData: object[];
}

class Weather extends Component<IWeatherProps, IWeatherStates> {
  state = {
    currentWeatherData: {},
    nextDaysWeatherData: [],
  };

  async componentDidMount() {
    const { lat, long } = this.props;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=auto&exclude=hourly&lang=en`;

    const res = await fetch(proxyUrl + targetUrl);
    const data = await res.json();
    console.log(data);

    this.setState({
      currentWeatherData: data.currently,
      nextDaysWeatherData: data.daily.data,
    });
  }

  async componentDidUpdate(prevProps: any) {
    const { lat, long } = this.props;
    if (lat !== prevProps.lat) {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${lat},${long}?units=auto&exclude=hourly&lang=en`;

      const res = await fetch(proxyUrl + targetUrl);
      const data = await res.json();
      console.log(data);

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

  render() {
    const { currentWeatherData, nextDaysWeatherData } = this.state;
    const { isCelsius } = this.props;

    return (
      <>
        {currentWeatherData ? (
          <WeatherToday
            data={currentWeatherData}
            getIcon={this.getIcon}
            convertToFahrenheit={this.convertToFahrenheit}
            isCelsius={isCelsius}
          />
        ) : null}
        {nextDaysWeatherData ? (
          <WeatherNextDays
            data={nextDaysWeatherData}
            getIcon={this.getIcon}
            convertToFahrenheit={this.convertToFahrenheit}
            isCelsius={isCelsius}
          />
        ) : null}
      </>
    );
  }
}

export default Weather;
