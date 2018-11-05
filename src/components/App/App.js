import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home.js'
import Next2 from '../Next2/Next2.js'
import Next3 from '../Next3/Next3.js'
import Next4 from '../Next4/Next4.js'
import Next5 from '../Next5/Next5.js'
import Admin from '../Admin/Admin.js'

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback</h1>
        </header>
        <br/>
        <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/2" component={Next2} />
            <Route exact path="/3" component={Next3} />
            <Route exact path="/4" component={Next4} />
            <Route exact path="/5" component={Next5} />
            <Route exact path="/admin" component={Admin} />

        </div>
      </Router>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);