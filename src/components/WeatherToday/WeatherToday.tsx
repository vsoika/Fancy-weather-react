import React, { Component } from 'react';
import Skycons from 'react-skycons';
import { Container, Row, ListGroup } from 'react-bootstrap';
import CSS from 'csstype';

import './WeatherToday.scss';

interface IWeatherTodayProps {
  data: any;
}

const skyconsStyles: CSS.Properties = {
  width: '300px',
  height: '150px',
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
    } = this.props.data;

    return (
      <Container>
        <Row>
          {temperature ? (
            <span className="weather-today_temperature">{`${Math.trunc(
              temperature
            )}°`}</span>
          ) : null}
          {icon ? (
            <Skycons
              className="weather_today-icon"
              color="green"
              icon={this.getIcon(icon)}
              style={skyconsStyles}
            />
          ) : null}
          <ListGroup variant="flush">
            {summary ? (
              <ListGroup.Item>{summary.toUpperCase()}</ListGroup.Item>
            ) : null}
            <ListGroup.Item>
              FEELS LIKE: {`${Math.trunc(apparentTemperature)}°`}
            </ListGroup.Item>
            <ListGroup.Item>
              WIND: {`${Math.trunc(windSpeed)} m/s`}
            </ListGroup.Item>
            <ListGroup.Item>HUMIDITY: {`${humidity * 100} %`}</ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default WeatherToday;
