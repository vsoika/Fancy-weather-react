import React, { Component } from 'react';
import WeatherNextDaysItem from '../WeatherNextDaysItem/WeatherNextDaysItem';

import './WeatherNextDays.scss';

interface IWeatherNextDaysProps {
  data: object[];
  getIcon: (iconName: string) => void;
  convertToFahrenheit: (convertValue: number) => string;
  isCelsius: boolean;
}

class WeatherNextDays extends Component<IWeatherNextDaysProps> {
  render() {
    const { data, getIcon, isCelsius, convertToFahrenheit } = this.props;

    return data.length ? (
      <div className="weather-next-days__wrapper">
        {data.map((day: {}, i) => (
          <WeatherNextDaysItem
            key={i}
            dayData={day}
            getIcon={getIcon}
            isCelsius={isCelsius}
            convertToFahrenheit={convertToFahrenheit}
          />
        ))}
      </div>
    ) : null;
  }
}

export default WeatherNextDays;