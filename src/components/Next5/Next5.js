import React, {Component} from 'react';
import ReturnButton from '../ReturnButton/ReturnButton';
import AdminButton from '../AdminButton/AdminButton';

class Next5 extends Component {

  render() {
    return (
      <div>
        <h2>Thank You!</h2>
        <h2><i>Would you like to make another submission?</i></h2>

        <ReturnButton />
        <br></br>
        <br></br>
        <AdminButton />
      </div>
    )
  }
}

export default Next5;