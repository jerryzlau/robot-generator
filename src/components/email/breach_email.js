import React, { Component } from 'react';
import BreachEmailItem from './breach_email_item';

class BreachEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hacks: ''
    };

    this.checkEmail = this.checkEmail.bind(this);
  }
  
  checkEmail(e){
    e.preventDefault();
    const { email } = this.state;
    this.setState({email: ''});
    fetch(`https://haveibeenpwned.com/api/v2/breachedaccount/${email}`)
    .then(res => res.json())
    .then(hacks => this.setState({hacks}))
    .catch(err => this.setState({hacks: ''}));
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  displayHacks(){
    const { hacks } = this.state;
    if(hacks){
      return hacks.map((hack, idx) => {
        return (
          <BreachEmailItem key={idx}
            hack={hack} />
        );
      });
    }else{
      return (
        <h2>No Hacks Detected</h2>
      );
    }
  }

  render() {
    return (
      <div className="component">
        <h1>Has your email been pwned?</h1>
        <form onSubmit={this.checkEmail}>
          <label>Check Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <input type="submit" 
            value="Submit"/>
        </form>
        {this.displayHacks()}
      </div>
    );
  }
}

export default BreachEmail;