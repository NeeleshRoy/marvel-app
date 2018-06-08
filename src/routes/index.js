import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CharacterContainer, SingleContainer } from '../containers';
import { Header, Footer } from '../components/hoc';

function Routes() {
	return (
		<React.Fragment>
			<Router>
				<React.Fragment>
					<Header />
					<Switch>
						<Route path="/characters" exact component={CharacterContainer} />
						<Route path="/characters/:id" component={SingleContainer} />
					</Switch>
					<Footer />
				</React.Fragment>
			</Router>
		</React.Fragment>
	);
}

export default Routes;
