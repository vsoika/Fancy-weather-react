import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { MAPBOX_TOKEN } from '../../constants';

interface IMapComponentProps {
  longitude: number;
  latitude: number;
}

class MapComponent extends Component<IMapComponentProps>  {
  state = {
      viewport: {
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        zoom: 12,
        bearing: 0,
        pitch: 0
      }
    };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width='auto'
        height="70vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
};

export default MapComponent;
