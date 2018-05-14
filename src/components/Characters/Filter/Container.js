import React, { Component } from 'react';
import SearchUi from './Presentation';

class Search extends Component {
	render() {
		return <SearchUi placeholder={this.props.placeholder} handleChange={this.props.handleChange} />;
	}
}

export default Search;
