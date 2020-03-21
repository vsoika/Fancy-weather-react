import React, { Component } from 'react';

interface ITodayWeatherProps {
  lat: string;
  long: string;
}

class TodayWeather extends Component<ITodayWeatherProps> {
  async componentDidMount() {
    const { lat, long } = this.props;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://api.darksky.net/forecast/dc0da20d15b9b96d103277561e93e979/${lat},${long}?units=auto&exclude=hourly&lang=en`;

    const res = await fetch(proxyUrl + targetUrl);
    const data = await res.json();
    console.log(data);
  }

  render() {
    return null;
  }
}

export default TodayWeather;
