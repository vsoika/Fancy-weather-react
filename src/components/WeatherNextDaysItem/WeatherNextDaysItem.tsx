import React, { Component } from 'react';
import Skycons from 'react-skycons';
import moment from 'moment';
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
}

class WeatherNextDaysItem extends Component<IWeatherNextDaysItemProps> {
  getWeekDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000).toLocaleString().split(',');
    const day = moment(date[0], 'DD/MM/YYYY').format('ddd, D MMMM');
    return day;
  };

  render() {
    const { temperatureHigh, temperatureLow, icon, time } = this.props.dayData;
    const { isCelsius, getIcon, convertToFahrenheit } = this.props;

    return (
      <div className="weather-next-days__day-container">
        <div className="weather-next-days__container-title">
          <span>{this.getWeekDay(time)}</span>
        </div>
        <div className="weather-next-days__container-weather">
          <Skycons color="white" icon={getIcon(icon)} style={skyconsStyles} />
          <div className="weather-next-days__container-weather__temperature">
            <div>
              {isCelsius
                ? `${Math.trunc(temperatureHigh)}°`
                : convertToFahrenheit(temperatureHigh)}
            </div>
            <div>
              {isCelsius
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
