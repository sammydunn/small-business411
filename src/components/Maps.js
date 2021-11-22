import React from 'react'
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};


function Maps(props) {
    const {lat, long} = props.address
    return (

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat:+lat, lng: +long}}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
      </GoogleMap>
  )
}



export default Maps