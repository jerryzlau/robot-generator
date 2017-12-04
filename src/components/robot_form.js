import React, { Component } from 'react';

class RobotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'jerry',
      type: "?set=set1"
    };
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {

    const { name, type } = this.state;
    const url = `https://robohash.org/${name}/${type}`;

    return <div className="form">
        <div className="input">
          <label>Name:
            <input onChange={this.update('name')}
            className="robot-name" />
          </label>
          <select className="robot-types"
          onChange={this.update('type')}>
            <option value="?set=set1" default>Robot</option>
            <option value="?set=set2">Monster</option>
            <option value="?set=set3">Fancy Robot</option>
            <option value="?set=set4">Cats</option>
          </select>
        </div>

        <img src={url}/>
      </div>;
  }
}

export default RobotForm;