import React, { Component } from 'react';
import Skycons from 'react-skycons';
import { Container, ListGroup } from 'react-bootstrap';
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
  isCelsius: boolean;
}

const skyconsStyles: CSS.Properties = {
  width: '150px',
  height: '75px',
};

class WeatherToday extends Component<IWeatherTodayProps> {
  render() {
    const {
      summary,
      icon,
      temperature,
      humidity,
      windSpeed,
      apparentTemperature,
      precipProbability,
    } = this.props.data;

    const { isCelsius, convertToFahrenheit, getIcon } = this.props;

    return (
      <Container>
        <div className="weather-today_icon">
          {icon ? (
            <Skycons color="white" icon={getIcon(icon)} style={skyconsStyles} />
          ) : null}
          {summary ? <span>{summary.toUpperCase()}</span> : null}
          {temperature ? (
            <span className="weather-today_temperature">
              {isCelsius
                ? `${Math.trunc(temperature)}°`
                : convertToFahrenheit(temperature)}
            </span>
          ) : null}
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <WiThermometer size={24} color="#fff" />
            <span>
              Feels like{' '}
              {isCelsius
                ? `${Math.trunc(apparentTemperature)}°`
                : convertToFahrenheit(apparentTemperature)}
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <WiStrongWind size={24} color="#fff" />
            <span>Wind {`${Math.trunc(windSpeed)} m/s`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <WiHumidity size={24} color="#fff" />
            <span>Humidity {`${Math.trunc(humidity * 100)} %`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <WiShowers size={24} color="#fff" />
            <span>Chance of rain {`${Math.trunc(precipProbability * 100)} %`}</span>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}

export default WeatherToday;
