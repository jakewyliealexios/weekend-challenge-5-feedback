import React, {Component} from 'react';
import Next3Button from '../Next3Button/Next3Button'

class Next2 extends Component {

  render() {
    return (
      <div>
        <h2>Page 2 of 4</h2>
        <h2><i>How well are you understaing the content?</i></h2>

        <Next3Button />
      </div>
    )
  }
}

export default Next2;