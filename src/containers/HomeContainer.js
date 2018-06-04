import React from 'react';
import PropTypes from 'prop-types';
import { Home } from 'components';
import { createStructuredSelector, createSelector } from 'reselect';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from 'actions/home';

class HomeContainer extends React.Component {
	static propTypes = {
		greet: PropTypes.func,
		message: PropTypes.string
	};

	render() {
		return <Home greet={this.props.greet} message={this.props.message} />;
	}
}

const mapStateToProps = createStructuredSelector({
	message: createSelector((state) => state.home.message, (message) => message)
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(homeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
