import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CharacterContainer } from '../containers';

function Routes() {
	return (
		<Router>
			<Route path="/characters" component={CharacterContainer} />
		</Router>
	);
}

export default Routes;
