import React, { Component } from 'react';
import Skycons from 'react-skycons';

interface IWeatherTodayProps {
  data: any;
}

class WeatherToday extends Component<IWeatherTodayProps> {
  getIcon = (iconName: string) => {
    const convertIconName = iconName.toUpperCase().replace('-', '_');

    return convertIconName;
  };

  render() {
    const { summary, icon, temperature, humidity, windSpeed, apparentTemperature } = this.props.data;

    return (
      <>
        {icon ? <Skycons color="green" icon={this.getIcon(icon)} /> : null}
        {temperature ? <div>{Math.trunc(temperature)}</div> : null}
      </>
    );
  }
}

export default WeatherToday;
