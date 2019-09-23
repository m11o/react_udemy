import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const InnerMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  />
));

const Map = () => {
  <InnerMap />
};

export default Map;
