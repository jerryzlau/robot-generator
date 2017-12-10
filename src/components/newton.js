import React, { Component } from 'react';
import '../css/newton.css';

class Newton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: 'simplify',
      expression: '',
      result: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(e){
    e.preventDefault();
    const { operation, expression } = this.state;
    if(operation && expression){
      const url = `https://newton.now.sh/${operation}/${expression}`;
      fetch(url)
        .then(res => res.json())
        .then(ans => {
          if(ans.error){
            this.setState({result: ans.error});
          }else{
            this.setState({ result: ans.result });
          }
        });
    }
  }

  operationOptions(){
    const operations = [
      'simplify',
      'factor',
      'derive',
      'integerate',
      'zeroes',
      'tangent',
      'area',
      'cos',
      'sin',
      'tan',
      'arccos',
      'arcsin',
      'arctan',
      'abs',
      'log'
    ];

    return operations.map((operation, idx) => {
      return (
        <option value={operation}
          key={idx}>{operation}</option>
      );
    });
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const { result, operation, expression } = this.state;
    return (
      <div className="component"
        onSubmit={this.handleSubmit}>
        <h1>Newton Calculator</h1>
        <form>
          <label>Operation: 
            <select value={operation}
              onChange={this.update('operation')}>
              {this.operationOptions()}
            </select>
          </label>
          <label>Expression: 
            <input type='text'
              value={expression}
              onChange={this.update('expression')}/>
          </label>
          <input type='submit'
          value='Calculate'/>
        </form>
        {
          result ? 
          <h2>Result: {result}</h2> :
          <h2>Provide expression to calculate</h2>
        }
      </div>
    );
  }
}

export default Newton;