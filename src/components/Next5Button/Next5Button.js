import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Next5Button extends Component {

  goToNext5 = () => {
    // alert("Going to Thank You Page!");
    console.log('Freebie props', this.props);
    this.props.history.push('/5');
  }

  render() {
    return (
        <button onClick={this.goToNext5}>SUBMIT</button>
    )
  }
}

export default withRouter(Next5Button);