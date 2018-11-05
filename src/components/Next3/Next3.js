import React, {Component} from 'react';
import Next4Button from '../Next4Button/Next4Button'

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

export default Next3;