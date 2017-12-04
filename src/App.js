import React, { Component } from 'react';
import RobotForm from './components/robot_form';
import './css/robot_form.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>
        What is your character?
      </h1>
        <RobotForm />
      </div>
    );
  }
}

export default App;
