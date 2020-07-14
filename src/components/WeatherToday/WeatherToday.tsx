import React, { Component } from 'react';
import Skycons from 'react-skycons';
import { Container, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CSS from 'csstype';
import {
  WiHumidity,
  WiThermometer,
  WiStrongWind,
  WiShowers,
} from 'weather-icons-react';

import './WeatherToday.scss';

interface IWeatherTodayProps {
  data: any;
  getIcon: (iconName: string) => void;
  convertToFahrenheit: (convertValue: number) => string;
  convertToCelsius: (convertValue: number) => string;
  isCelsius: boolean;
  isUsCountryUnits: boolean;
}

const skyconsStyles: CSS.Properties = {
  width: '150px',
  height: '75px',
};

const WeatherToday: React.FC<IWeatherTodayProps> = props => {
  const { t } = useTranslation();
  const {
    isCelsius,
    convertToFahrenheit,
    convertToCelsius,
    getIcon,
    isUsCountryUnits,
  } = props;
  const {
    summary,
    icon,
    temperature,
    humidity,
    windSpeed,
    apparentTemperature,
    precipProbability,
  } = props.data;

  return (
    <Container>
      <div className="weather-today_icon">
        {icon ? (
          <Skycons color="white" icon={getIcon(icon)} style={skyconsStyles} />
        ) : null}
        {summary ? <span>{summary.toUpperCase()}</span> : null}
        {temperature ? (
          <span className="weather-today_temperature">
            {isCelsius && isUsCountryUnits
              ? convertToCelsius(temperature)
              : isCelsius || isUsCountryUnits
              ? `${Math.trunc(temperature)}°`
              : convertToFahrenheit(temperature)}
          </span>
        ) : null}
      </div>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <WiThermometer size={24} color="#fff" />
          <span>
            {t('feelsLike')}{' '}
            {isCelsius && isUsCountryUnits
              ? convertToCelsius(apparentTemperature)
              : isCelsius || isUsCountryUnits
              ? `${Math.trunc(apparentTemperature)}°`
              : convertToFahrenheit(apparentTemperature)}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <WiStrongWind size={24} color="#fff" />
          <span>
            {t('wind')} {`${Math.trunc(windSpeed)} m/s`}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <WiHumidity size={24} color="#fff" />
          <span>
            {t('humidity')} {`${Math.trunc(humidity * 100)} %`}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <WiShowers size={24} color="#fff" />
          <span>
            {t('chanceOfRain')} {`${Math.trunc(precipProbability * 100)} %`}
          </span>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default WeatherToday;
