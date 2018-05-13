import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path = "/characters" component={ Characters } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
