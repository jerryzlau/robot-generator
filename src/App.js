import React, { Component } from 'react';
import RobotForm from './components/robot_form';
import Weather from './components/weather/weather';
import BreachEmail from './components/email/breach_email';
import Newton from './components/newton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RobotForm />
        <Weather />
        <BreachEmail />
        <Newton />
      </div>
    );
  }
}

export default App;
