import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
	characterData: {
		count: 0,
		limit: 10,
		offset: 0,
		results: [],
		total: 0,
	},
};

const propTypes = {
	characterData: PropTypes.shape({
		count: PropTypes.number,
		limit: PropTypes.number,
		offset: PropTypes.number,
		results: PropTypes.array,
		total: PropTypes.number,
	}),
};

export default function Characters({ characterData }) {
	return characterData.results ? <p>{characterData.results.map((char) => char.name)}</p> : <div>loading</div>;
}

Characters.propTypes = propTypes;
Characters.defaultProps = defaultProps;
