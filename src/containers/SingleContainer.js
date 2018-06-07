import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Single from '../components/Single';

import * as SingleActions from '../actions/single';

const defaultProps = {};

const propTypes = {
	getCharacter: PropTypes.func.isRequired,
	character: PropTypes.shape({
		data: PropTypes.shape({
			results: PropTypes.array,
		}),
	}).isRequired,
	match: PropTypes.shape({
		params: PropTypes.object.isRequired,
	}).isRequired,
};

class SingleContainer extends React.Component {
	componentDidMount() {
		this.props.getCharacter(this.props.match.params.id);
	}

	render() {
		return this.props.character.data ? Single(this.props.character.data.results) : <div>Loading</div>;
	}
}

SingleContainer.propTypes = propTypes;
SingleContainer.defaultProps = defaultProps;

const charactersSelector = (state) => state.single.character;

const mapStateToProps = createStructuredSelector({
	character: charactersSelector,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(SingleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleContainer);
