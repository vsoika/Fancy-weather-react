import React, { Component } from 'react';
import { OPENCAGEDATA_API_KEY } from '../../constants';
import MapComponent from '../MapComponent';
import MapModal from '../MapModal';
import { Button } from 'react-bootstrap';
import { GeoAlt } from 'react-bootstrap-icons';

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
    const { latitude, longitude, modalShow } = this.state;

    return (
      <div>
        {latitude && longitude ? (
          <>
            <Button
              variant="primary"
              onClick={() => this.setState({ modalShow: true })}
            >
              <GeoAlt size={25} />
            </Button>

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
