import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CharacterContainer, SingleContainer } from '../containers';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/characters" exact component={CharacterContainer} />
				<Route path="/characters/:id" component={SingleContainer} />
			</Switch>
		</Router>
	);
}

export default Routes;
