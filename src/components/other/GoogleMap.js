import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMap extends React.Component {

    MAP_OPTIONS = {
        scrollwheel: false
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                initialCenter={{ lat: 45.590759, lng: 5.917466 }}
                options={this.MAP_OPTIONS}
            >
                <Marker position={{ lat: 45.590759, lng: 5.917466 }} />
            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBh55szd99dVYDDXpDm4FWzKQdDRCsNmUY'
})(GoogleMap);



