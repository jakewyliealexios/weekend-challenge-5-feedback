import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state=[], action) => {
    console.log('In feedback reducer...');
    if ( action.type === 'SET_FEEDBACK' ) {
      state = action.payload;
    } 
    return state;
  }
  
  const storeInstance = createStore(
    combineReducers({
      feedbackReducer
      // Don't need combine right now, only one
      // But setup for later & gives us a feedbackReducer in reduxState 
    }),
    applyMiddleware(logger)
  )
  
  
  ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>, document.getElementById('root'));
  registerServiceWorker();
