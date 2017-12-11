import React, { Component } from 'react';
import '../../css/weather.css';

class WeatherItem extends Component {
  render() {
    const { weather_state_abbr, 
      weather_state_name, 
      min_temp, max_temp, the_temp, applicable_date,
      humidity, visibility } = this.props.weather;

    // grab image url 
    const url = `https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`;
    return <div className="weather">
        <div className="weather-left">
          <h3>{weather_state_name}</h3>
          <img src={url} />
        </div>
        <div className="weather-right">
          <h3>Date: {applicable_date}</h3>
          <h3>Lowest Temperature: {Math.round(min_temp)} °C</h3>
          <h3>Highest Temperature: {Math.round(max_temp)} °C</h3>
          <h3>Temperature: {Math.round(the_temp)} °C</h3>
          <h3>Humidity: {Math.round(humidity)}%</h3>
          <h3>Visibility: {Math.round(visibility)}</h3>
        </div>
      </div>;
  }
}

export default WeatherItem;