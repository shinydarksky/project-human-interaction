import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div><h1>{text}</h1></div>;

class Map extends Component {

    com

  static defaultProps = {
    center: {
      lat: 16.40,
      lng: 108.20
    },
    zoom: 6
  };

  render() {
    const key = "AIzaSyAHKM6V5yWzt3pM_HppoffbRtZKCc_6tSE";
    return (
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.arrLocation.map((location,index) => (
            <AnyReactComponent
            lat={location[0]}
            lng={location[1]}
            text={index}  //hien thi tren map
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;