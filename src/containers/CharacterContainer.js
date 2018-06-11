import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Characters } from '../components';
import * as CharacterActions from '../actions/characters';

const defaultProps = {
	characters: {},
};

const propTypes = {
	getCharacters: PropTypes.func.isRequired,
	characters: PropTypes.shape({
		data: PropTypes.shape({
			count: PropTypes.number,
			limit: PropTypes.number,
			offset: PropTypes.number,
			results: PropTypes.array,
		}),
	}),
};

class HomeContainer extends React.Component {
	componentWillMount() {
		if (!window.characterLoaded) {
			this.props.getCharacters();
			window.characterLoaded = true;
		}
	}

	render() {
		return (
			<React.Fragment>
				<Characters characterData={this.props.characters} />
			</React.Fragment>
		);
	}
}

HomeContainer.propTypes = propTypes;
HomeContainer.defaultProps = defaultProps;

const charactersSelector = (state) => state.characters.characters.data;
const offsetSelector = (state) => state.characters.offset;

const mapStateToProps = createStructuredSelector({
	characters: charactersSelector,
	offset: offsetSelector,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(CharacterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
