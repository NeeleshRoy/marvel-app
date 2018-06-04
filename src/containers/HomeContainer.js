import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';

import { Home } from '../components';
import * as homeActions from '../actions/home';

const propTypes = {
	greet: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
};

const HomeContainer = (props) => (
	<React.Fragment>
		<Home greet={props.greet} message={props.message} />
	</React.Fragment>
);

HomeContainer.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
	message: createSelector((state) => state.home.message, (message) => message),
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(homeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
