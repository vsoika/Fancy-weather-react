import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

interface IMapComponentProps {
  longitude: number;
  latitude: number;
}

const MapComponent: React.FC<IMapComponentProps> = ({ longitude, latitude }) => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZ2VzdGEwMyIsImEiOiJjazlxMWpvaHIwZnl5M25tbXp1bHVoeGd1In0.ONh-B7KpS5D2Mwx64KpAaQ',
  });

  console.log(latitude, longitude)

  return (
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        center={[longitude, latitude]}
        containerStyle={{
          height: '300px',
          width: '300px'
        }}
      />
  );
};

export default MapComponent;
