import React, { Component } from 'react';
import RobotForm from "./robot_form";
import Weather from "./weather/weather";
import BreachEmail from "./email/breach_email";
import Newton from "./newton";

class NavBar extends Component {
  update(){
    return e => {
      this.props.updateDisplay(e.target.value);
    };
  }

  render() {
    return <div className="nav">
        <div className="nav-bar">
          <input type="button" value="RobotForm" onClick={this.update("page")} />
          <input type="button" value="Weather" onClick={this.update("page")} />
          <input type="button" value="BreachEmail" onClick={this.update("page")} />
          <input type="button" value="Newton" onClick={this.update("page")} />
        </div>
      </div>;
  }
}

export default NavBar;