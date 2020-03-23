import React, { Component } from 'react';
import Skycons from 'react-skycons';
import WeatherToday from '../WeatherToday';

interface IWeatherProps {
  lat: string;
  long: string;
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
    const targetUrl = `https://api.darksky.net/forecast/dc0da20d15b9b96d103277561e93e979/${lat},${long}?units=auto&exclude=hourly&lang=en`;

    const res = await fetch(proxyUrl + targetUrl);
    const data = await res.json();
    console.log(data);

    this.setState({
      currentWeatherData: data.currently,
      nextDaysWeatherData: data.daily.data,
    });
  }

  render() {
    const { currentWeatherData, nextDaysWeatherData } = this.state;
    return (
      <>
        {currentWeatherData ? <WeatherToday data={currentWeatherData} /> : null}
      </>
    );
  }
}

export default Weather;
