import React, { Component } from 'react';
import '../../css/breach_email.css';

class BreachEmailItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { hack } = this.props;
    return (
      <div className="hack">
        <h2>{hack.Title}</h2>
        <div className="hack-info">
          <img alt="Image Not Found"
          className="company-logo"
          src={`https://logo.clearbit.com/${hack.Domain}`}/>
          <p dangerouslySetInnerHTML={{__html: hack.Description}}/>
        </div>
      </div>
    );
  }
}

export default BreachEmailItem;