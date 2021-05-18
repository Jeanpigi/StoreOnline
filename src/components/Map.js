import React from 'react'
// Google Api
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ( {data} ) => {

    const containerStyle = {
        height: '50vh',
        width: '100%'
    }

    const center = {
        lat: data.lat,
        lng: data.lng
    }

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;
