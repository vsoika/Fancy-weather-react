import React, { Component } from 'react';
import { OPENCAGEDATA_API_KEY } from '../../constants';
import MapComponent from '../MapComponent';
import MapModal from '../MapModal';
import { Button } from 'react-bootstrap';
import { GeoAlt } from 'react-bootstrap-icons';

import './CoordinatesByCity.scss';

interface ICoordinatesByCityProps {
  searchCity: string;
  getCoordinates: (lat: string, long: string) => void;
}

interface ICoordinatesByCityState {
  latitude: string;
  longitude: string;
  modalShow: boolean;
}

class CoordinatesByCity extends Component<
  ICoordinatesByCityProps,
  ICoordinatesByCityState
> {
  state = {
    latitude: '',
    longitude: '',
    modalShow: false,
  };

  async componentDidMount() {
    const { searchCity, getCoordinates } = this.props;
    console.log(searchCity);
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

  async componentDidUpdate(prevProps: any) {
    const { searchCity, getCoordinates } = this.props;

    console.log(this.props.searchCity, prevProps.searchCity)

    if (this.props.searchCity !== prevProps.searchCity) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchCity}&key=${OPENCAGEDATA_API_KEY}=1&language=en`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data)

      this.setState({
        latitude: data.results[0].geometry.lat,
        longitude: data.results[0].geometry.lng,
      });

      const { latitude, longitude } = this.state;
      getCoordinates(latitude, longitude);
    }
  }

  render() {
    const { latitude, longitude, modalShow } = this.state;

    return (
      <div className="coordinates-container">
        {latitude && longitude ? (
          <>
            <button
              className="btn btn-modal"
              onClick={() => this.setState({ modalShow: true })}
            >
              <GeoAlt className="btn-modal__icon" size={25} />
            </button>

            <MapModal
              latitude={+latitude}
              longitude={+longitude}
              show={modalShow}
              onHide={() => this.setState({ modalShow: false })}
            />
          </>
        ) : null}
        <span>
          {latitude}, {longitude}
        </span>
      </div>
    );
  }
}

export default CoordinatesByCity;
