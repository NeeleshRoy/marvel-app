import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

function Home({ message, greet }) {
	return (
		<section>
			<input type="text" onChange={greet} />
			<p>{message}</p>
		</section>
	);
}

Home.propTypes = {
	greet: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired
};

export default pure(Home);
