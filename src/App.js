import React, { Component } from 'react';
import Table from './Components/Table';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'

import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { Tab, Switch } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Quiz" exact component={Table} />
          <Route path="/Login" exact component={Login} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
