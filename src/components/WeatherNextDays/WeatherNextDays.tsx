import React, { Component } from 'react';
import WeatherNextDaysItem from '../WeatherNextDaysItem/WeatherNextDaysItem';

import './WeatherNextDays.scss';

interface IWeatherNextDaysProps {
  data: object[];
  getIcon: (iconName: string) => void;
  convertToFahrenheit: (convertValue: number) => string;
  convertToCelsius: (convertValue: number) => string;
  isCelsius: boolean;
  language: string;
  isUsCountryUnits: boolean;
}

class WeatherNextDays extends Component<IWeatherNextDaysProps> {
  render() {
    const {
      data,
      getIcon,
      isCelsius,
      convertToFahrenheit,
      convertToCelsius,
      language,
      isUsCountryUnits,
    } = this.props;

    return data.length ? (
      <div className="weather-next-days__wrapper">
        {data.map((day: {}, i) => {
          return i !== 0 ? (
            <WeatherNextDaysItem
              key={i}
              dayData={day}
              getIcon={getIcon}
              isCelsius={isCelsius}
              convertToFahrenheit={convertToFahrenheit}
              convertToCelsius={convertToCelsius}
              language={language}
              isUsCountryUnits={isUsCountryUnits}
            />
          ) : null;
        })}
      </div>
    ) : null;
  }
}

export default WeatherNextDays;
