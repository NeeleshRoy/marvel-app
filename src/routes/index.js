import React from 'react';
import { Home } from 'containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Routes() {
	return (
		<Router>
			<Route path="/" component={Home} />
		</Router>
	);
}

export default Routes;
