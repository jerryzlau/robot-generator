import React, { Component } from 'react';
import RobotForm from './components/robot_form';
import Weather from './components/weather';
import './css/robot_form.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RobotForm />
        <Weather />
      </div>
    );
  }
}

export default App;
