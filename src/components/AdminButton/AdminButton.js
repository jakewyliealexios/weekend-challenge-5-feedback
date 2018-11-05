import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class AdminButton extends Component {

  goToAdmin = () => {
    // alert("Going to Admin page ...");
    console.log('Freebie props', this.props);
    this.props.history.push('/admin');
  }

  render() {
    return (
        <button onClick={this.goToAdmin}>Visit Admin Page...</button>
    )
  }
}

export default withRouter(AdminButton);