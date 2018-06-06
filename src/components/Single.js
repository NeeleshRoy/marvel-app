import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function Single(props) {
	return <img src={`${props[0].thumbnail.path}.${props[0].thumbnail.extension}`} alt="" />;
}

Single.propTypes = propTypes;
Single.defaultProps = defaultProps;
