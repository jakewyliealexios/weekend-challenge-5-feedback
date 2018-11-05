import React, {Component} from 'react';
import { connect } from 'react-redux';
import Next4Button from '../Next4Button/Next4Button'

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class Next3 extends Component {

  render() {
    return (
      <div>
        <h2>Page 3 of 4</h2>
        <h2><i>How well are you being supported?</i></h2>

        <Next4Button />
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Next3);