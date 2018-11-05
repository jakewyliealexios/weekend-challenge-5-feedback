import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReturnButton from '../ReturnButton/ReturnButton';
import AdminButton from '../AdminButton/AdminButton';

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

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

export default connect(mapReduxStateToProps)(Next5);