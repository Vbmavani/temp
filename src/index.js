import React from 'react';

import rootReducer from './state/reducers/index'

import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore ,applyMiddleware ,compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";

const logger =store =>{
  return next => {
    return action =>{
        console.log('[Middleware] Dispatching' ,action)
        const result =next(action);
        console.log('[Middleware] Dispatching' ,store.getState());
        return result;
    }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer ,composeEnhancers(applyMiddleware(logger,thunk)));


ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
