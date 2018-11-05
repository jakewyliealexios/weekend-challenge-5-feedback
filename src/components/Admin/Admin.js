import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import ReturnButton from '../ReturnButton/ReturnButton';


const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class Admin extends Component {

      // When the App is first loaded get our stuff
  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
    // Get our feedback rows from the server
    axios.get('/feedback')
      .then( (response) => {
        //Do something with stuff
        this.props.dispatch( {type: 'SET_FEEDBACK', payload: response.data} );
      })
      .catch( (error) => {
        console.log('Bad stuff happened! Oh no!', error);
        alert('Bad stuff happened! Oh no!');
      })
  }

    deleteFeedback = (id) => {
        // call axios
        alert('Deleted Feedback!')
        axios({
          method: 'DELETE',
          url: `/feedback/${id}`
        })
        .then( (response) => {
          this.props.getFeedback();
        })
        .catch( (error) => {
          alert('Bad stuff happened! Oh no!');
        })
      }    

  render() {
    return (
      <div>
        <h2>Admin Results:</h2>
        <h3><i>most recent submissions on top...</i></h3>
        <h3><ReturnButton /></h3>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {this.props.reduxState.feedbackReducer.map(feedback => (
                    <tr key={feedback.id}>
                        <td>{`${feedback.feeling}`}</td>
                        <td>{`${feedback.understanding}`}</td>
                        <td>{`${feedback.support}`}</td>
                        <td>{`${feedback.words}`}</td>
                        <td><button onClick={() => {this.deleteFeedback(feedback.id)}}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>

      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Admin);