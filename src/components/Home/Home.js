import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Next2Button from '../Next2Button/Next2Button'

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

const emptyFeedbackObject = {
    feeling: '',
    understanding: '',
    support: '',
    words: '',
  };  

class Home extends Component {    

    state = emptyFeedbackObject;

    addFeedback = () => {
      axios({
        method: 'POST',
        url: '/feedback',
        data: this.state
      })
      .then( ( response ) => {
        this.props.getFeedback();
        this.clearFeedbackFields();
      })
      .catch( (error) => {
        alert('Bad things happened! Oh no!');
      })
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.addFeedback();
    }
  
    clearFeedbackFields = () => {
      this.setState(emptyFeedbackObject);
    }  

  render() {
    return (
      <div>
        <h2>Page 1 of 4</h2>
        <h2><i>How are you feeling today?</i></h2>
        <form>
            <label>1 = stressed </label>
            <input />
            <label> 5 = great</label>
        </form>
            <br></br>
        <Next2Button />
            <br></br>
            <br></br>
        
        <h3>Complete Submission Test:</h3>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} placeholder="Feeling: 1-5" value={this.state.feeling} name="feeling" />
                <br></br>
            <input onChange={this.handleChange} placeholder="Understanding: 1-5" value={this.state.understanding} name="understanding" />
                <br></br>
            <input onChange={this.handleChange} placeholder="Support: 1-5" value={this.state.support} name="support" />
                <br></br>
            <input onChange={this.handleChange} placeholder="Comments" value={this.state.words} name="words" />
                <br></br>
            <input type="submit" value="Submit" />                
        </form>
            <br></br>
        <pre>Feedback: { JSON.stringify( this.props.reduxState.feedbackReducer ) }</pre>



      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(Home);