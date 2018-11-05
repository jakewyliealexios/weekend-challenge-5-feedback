import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Next3Button extends Component {

  goToNext3 = () => {
    // alert("Going to Page 3 of 4!");
    console.log('Freebie props', this.props);
    this.props.history.push('/3');
  }

  render() {
    return (
        <button onClick={this.goToNext3}>Next--></button>
    )
  }
}

export default withRouter(Next3Button);