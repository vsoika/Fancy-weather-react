import React, { Component } from 'react';
import Skycons from 'react-skycons';
import { Container, Row, ListGroup } from 'react-bootstrap';
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
}

const skyconsStyles: CSS.Properties = {
  width: '150px',
  height: '75px',
};

class WeatherToday extends Component<IWeatherTodayProps> {
  getIcon = (iconName: string) => {
    const convertIconName = iconName.toUpperCase().replace('-', '_');

    return convertIconName;
  };

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

    return (
      <Container>
        <div className="weather-today_icon">
          {icon ? (
            <Skycons
              color="green"
              icon={this.getIcon(icon)}
              style={skyconsStyles}
            />
          ) : null}
          {summary ? <span>{summary.toUpperCase()}</span> : null}
        </div>
        {temperature ? (
          <span className="weather-today_temperature">{`${Math.trunc(
            temperature
          )}°`}</span>
        ) : null}
        <ListGroup variant="flush">
          <ListGroup.Item>
            <WiThermometer size={24} color="#000" />
            <span>FEELS LIKE: {`${Math.trunc(apparentTemperature)}°`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <WiStrongWind size={24} color="#000" />
            <span>WIND: {`${Math.trunc(windSpeed)} m/s`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <WiHumidity size={24} color="#000" />
            <span>HUMIDITY: {`${humidity * 100} %`}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <WiShowers size={24} color="#000" />
            <span>CHANCE OF RAIN: {`${precipProbability * 100} %`}</span>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}

export default WeatherToday;
