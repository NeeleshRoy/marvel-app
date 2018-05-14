import React, { Component } from 'react';
import { CharacterGrid } from './Presentation';
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

		this.handleKeyPress = this.handleKeyPress.bind(this);
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

	searchResults = () => {
		const that = this;
		const charactersSearchApi = `${constants.api.host}${constants.api.characters}?apikey=${constants.api
			.apiKey}&limit=40&orderBy=-modified&nameStartsWith=${that.state.search}`;
		fetch(charactersSearchApi)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				that.setState({ data: data, loading: false });
			});
	};

	handleKeyPress = (event) => {
		const that = this;
		if (event.keyCode === 13) {
			event.preventDefault();
			that.setState({ loading: true, search: event.target.value });
			that.searchResults();
		}
	};

	render() {
		if (this.state.loading) {
			return <Loader />;
		} else {
			const results = this.state.data.data.results;
			return (
				<React.Fragment>
					<CharacterGrid characters={results} />
				</React.Fragment>
			);
		}
	}
}

export default CharacterContainer;
