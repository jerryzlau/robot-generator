import React, { Component } from 'react';

class RobotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'defaul',
      type: "set_set1",
      rangeX: 200,
      rangeY: 200,
      backGround: 0
    };
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {

    const { name, type, rangeX, rangeY, backGround } = this.state;
    const url = `https://robohash.org/${name}/${type}/bgset_bg${backGround}/?size=${rangeX}x${rangeY}`;
    
    return <div className="form">
        <h1>Chracter Generator</h1>
        <div className="inputs">
          <label>
            Name:
            <input onChange={this.update("name")} className="robot-name" />
          </label>
          <label>
            {" "}
            X-axis {rangeX}
            <input type="range" value={rangeX} min="50" max="400" onChange={this.update("rangeX")} />
          </label>
          <label>
            {" "}
            Y-axis {rangeY}
            <input type="range" value={rangeY} min="50" max="400" onChange={this.update("rangeY")} />
          </label>
          <select onChange={this.update("type")}>
            <option value="set_set1" default>
              Robot
            </option>
            <option value="set_set2">Monster</option>
            <option value="set_set3">Fancy Robot</option>
            <option value="set_set4">Cats</option>
          </select>
          <select onChange={this.update("backGround")}>
            <option value="0" default>
              None
            </option>
            <option value="1">Background 1</option>
            <option value="2">Background 2</option>
          </select>
        </div>

        <img alt="robot" src={url} />
      </div>;
  }
}

export default RobotForm;