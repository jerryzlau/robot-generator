import React, { Component } from 'react';
import WeatherItem from './weather_item';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
      resolved: false
    };

  }

  componentDidMount(){
    this.getLocation();
  }
  
  getLocation(){
    navigator.geolocation.getCurrentPosition(position => {
      const lat =  position.coords.latitude;
      const lng =  position.coords.longitude;

      // grab location name and place id 
      const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`;
      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({
          city: data[0].title,
          woeid: data[0].woeid,
          lat,
          lng
      }))
      .then(() => this.getInfo());
      
    });
  }

  getInfo(){
    const { woeid } = this.state;
    const url = `https://www.metaweather.com/api/location/${woeid}`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        weathers: data.consolidated_weather
      }))
      .then(() => this.buildWeather());
  }

  buildWeather(){
    const { weathers } = this.state;
    const weatherInfo = weathers.map(weather => {
      return (
        <WeatherItem key={weather.id}
          weather={weather} />
      );
    });
  
    this.setState({
      weathers: weatherInfo,
      resolved: true
    });
  }

  render() {
    if(this.state.resolved){
      return (
        <div className="component"> 
          <h1>{this.state.city}</h1>
          {this.state.weathers}
        </div>
      );
    }else{
      return( 
        <div className="component">
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default Weather;