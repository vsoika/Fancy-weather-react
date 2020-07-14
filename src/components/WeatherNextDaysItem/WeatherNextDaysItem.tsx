import React, { Component } from 'react';
import Skycons from 'react-skycons';
import moment from 'moment';
import 'moment/min/locales.min';
import CSS from 'csstype';

import './WeatherNextDaysItem.scss';

const skyconsStyles: CSS.Properties = {
  width: '120px',
  height: '60px',
};

interface IWeatherNextDaysItemProps {
  dayData: any;
  getIcon: (iconName: string) => void;
  convertToFahrenheit: (convertValue: number) => string;
  isCelsius: boolean;
  language: string;
  convertToCelsius: (convertValue: number) => string;
  isUsCountryUnits: boolean;
}

class WeatherNextDaysItem extends Component<IWeatherNextDaysItemProps> {
  getWeekDay = (timestamp: number) => {
    const day = moment(timestamp * 1000).format('ddd, D MMMM');
    moment.locale(this.props.language);
    console.log(moment.locale(), day);
    return day;
  };

  render() {
    const { temperatureHigh, temperatureLow, icon, time } = this.props.dayData;
    const {
      isCelsius,
      getIcon,
      convertToFahrenheit,
      convertToCelsius,
      isUsCountryUnits,
    } = this.props;

    return (
      <div className="weather-next-days__day-container">
        <div className="weather-next-days__container-title">
          <span>{this.getWeekDay(time)}</span>
        </div>
        <div className="weather-next-days__container-weather">
          <Skycons color="white" icon={getIcon(icon)} style={skyconsStyles} />
          <div className="weather-next-days__container-weather__temperature">
            <div>
              {isCelsius && isUsCountryUnits
                ? convertToCelsius(temperatureHigh)
                : isCelsius || isUsCountryUnits
                ? `${Math.trunc(temperatureHigh)}°`
                : convertToFahrenheit(temperatureHigh)}
            </div>
            <div>
              {isCelsius && isUsCountryUnits
                ? convertToCelsius(temperatureLow)
                : isCelsius || isUsCountryUnits
                ? `${Math.trunc(temperatureLow)}°`
                : convertToFahrenheit(temperatureLow)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherNextDaysItem;
