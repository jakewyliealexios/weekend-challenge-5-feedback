import React, {Component} from 'react';
import { connect } from 'react-redux';
import Next5Button from '../Next5Button/Next5Button'

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class Next4 extends Component {

  render() {
    return (
      <div>
        <h2>Page 4 of 4</h2>
        <h2><i>Are there any other comments you want to share?</i></h2>

        <Next5Button />
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Next4);