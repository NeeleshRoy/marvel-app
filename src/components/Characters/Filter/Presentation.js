import React from 'react';
import PropTypes from 'prop-types';

const SearchUi = ({ placeholder, handleChange }) => {
	return (
		<form>
			<input type="search" placeholder={placeholder} onKeyPress={handleChange} />
		</form>
	);
};

SearchUi.propTypes = {
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default SearchUi;
