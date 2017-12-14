import React, { Component } from 'react';
import RobotForm from './components/robot_form';
import Weather from './components/weather/weather';
import BreachEmail from './components/email/breach_email';
import Newton from './components/newton';
import NavBar from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'RobotForm'
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(page){
    this.setState({page});
  }
  
  render() {

    let display;

    const {page} = this.state;

    if(page === 'RobotForm'){
      display = <RobotForm />;
    }else if(page === 'Weather'){
      display = <Weather />;
    }else if(page === 'BreachEmail'){
      display = <BreachEmail />;
    }else{
      display = <Newton />;
    }

    return (
      <div className="App">
        <NavBar 
         updateDisplay={this.updateDisplay} />
        {display}
      </div>
    );
  }
}

export default App;
