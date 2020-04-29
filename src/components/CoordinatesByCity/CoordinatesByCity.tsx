import React, { Component } from 'react';
import { OPENCAGEDATA_API_KEY } from '../../constants';

interface ICoordinatesByCityProps {
  searchCity: string;
  getCoordinates: (lat: string, long: string) => void;
}

interface ICoordinatesByCityState {
  latitude: string;
  longitude: string;
}

class CoordinatesByCity extends Component<
  ICoordinatesByCityProps,
  ICoordinatesByCityState
> {
  state = {
    latitude: '',
    longitude: '',
  };

  async componentDidMount() {
    const { searchCity, getCoordinates } = this.props;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchCity}&key=${OPENCAGEDATA_API_KEY}=1&language=en`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      latitude: data.results[0].geometry.lat,
      longitude: data.results[0].geometry.lng,
    });

const { latitude, longitude } = this.state; 
    getCoordinates(latitude, longitude);
  }

  render() {
    const { latitude, longitude } = this.state;

    return (
      <div>
        {latitude}, {longitude}
      </div>
    );
  }
}

export default CoordinatesByCity;
