import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/characters" exact component={Characters} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
