import React, { Component } from 'react';
import { CharacterGrid } from './Presentation';
import Search from './Filter';
import Loader from '../Utils/Loader';
import constants from '../constants';

class CharacterContainer extends Component {
	constructor() {
		super();

		this.state = {
			loading: true,
			data: [],
			search: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.searchResults = this.searchResults.bind(this);
	}

	componentDidMount() {
		const that = this;
		const charactersGridApi = `${constants.api.host}${constants.api.characters}?apikey=${constants.api
			.apiKey}&limit=40&orderBy=-modified`;
		fetch(charactersGridApi)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				that.setState({ data: data, loading: false });
			});
	}

	searchResults = (searched) => {
		const that = this;
		const charactersSearchApi = `${constants.api.host}${constants.api.characters}?apikey=${constants.api
			.apiKey}&limit=40&orderBy=-modified&nameStartsWith=${searched}`;

		that.setState({ loading: true });
		fetch(charactersSearchApi)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				that.setState({ data: data, loading: false });
			});
	};

	handleChange = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			this.searchResults(event.target.value);
		}
	};

	render() {
		if (this.state.loading) {
			return <Loader />;
		} else {
			const results = this.state.data.data.results;
			return (
				<React.Fragment>
					<Search placeholder="Search character by name" handleChange={this.handleChange} />
					<CharacterGrid characters={results} />
				</React.Fragment>
			);
		}
	}
}

export default CharacterContainer;
