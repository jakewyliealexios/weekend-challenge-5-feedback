import React, {Component} from 'react';
import Next2Button from '../Next2Button/Next2Button'

class Home extends Component {

  render() {
    return (
      <div>
        <h2>Page 1 of 4</h2>
        <h2><i>How are you feeling today?</i></h2>
        <Next2Button />
      </div>
    )
  }
}

export default Home;