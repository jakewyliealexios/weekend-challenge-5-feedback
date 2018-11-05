import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Next4Button extends Component {

  goToNext4 = () => {
    // alert("Going to Page 4 of 4!");
    console.log('Freebie props', this.props);
    this.props.history.push('/4');
  }

  render() {
    return (
        <button onClick={this.goToNext4}>Next---></button>
    )
  }
}

export default withRouter(Next4Button);