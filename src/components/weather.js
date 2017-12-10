import React, { Component } from 'react';
import { getLocation } from '../util/weather_util';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: ''
    };
  }

  componentWillMount(){
    this.getLatLng();
  }
  
  getLatLng(){
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

  getLocation(){
    const { lat, lng } = this.state;
    const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`;
    fetch(url, {
      mode: 'no-cors'
    }).then(res => console.log(res));
  }

  render() {
    if(this.state.lat && this.state.lng){
      return (
        <div className="weather"> 
          {this.getLocation()}
        </div>
      );
    }else{
      return( 
        <div className="weather">
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default Weather;