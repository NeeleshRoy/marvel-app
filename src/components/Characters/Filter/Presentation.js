import React from 'react';
import PropTypes from 'prop-types';

const SearchUi = ({ placeholder, handleChange }) => {
	return <input className="search" type="search" placeholder={placeholder} onKeyPress={handleChange} />;
};

SearchUi.propTypes = {
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default SearchUi;
