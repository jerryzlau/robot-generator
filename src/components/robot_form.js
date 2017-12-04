import React, { Component } from 'react';

class RobotForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  update(field){
    return e => {
      console.log(e.target.value);
    };
  }

  render() {
    return <div>
        <input onChange={this.update('name')}
        className="robot-name" />
        <select className="robot-types"
        onChange={this.update('types')}>
          <option value="?set=set1" default>Robot</option>
          <option value="?set=set2">Monster</option>
          <option value="?set=set3">Fancy Robot</option>
          <option value="?set=set4">Cats</option>
        </select>
      </div>;
  }
}

export default RobotForm;