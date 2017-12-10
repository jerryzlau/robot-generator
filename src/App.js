import React, { Component } from 'react';
import RobotForm from './components/robot_form';
import Weather from './components/weather';
import BreachEmail from './components/breach_email';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RobotForm />
        {/* <Weather /> */}
        <BreachEmail />
      </div>
    );
  }
}

export default App;
