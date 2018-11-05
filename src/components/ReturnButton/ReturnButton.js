import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ReturnButton extends Component {

  goToHome = () => {
    // alert("Going to Thank You Page!");
    console.log('Freebie props', this.props);
    this.props.history.push('/');
  }

  render() {
    return (
        <button onClick={this.goToHome}>Return to make another submission...</button>
    )
  }
}

export default withRouter(ReturnButton);