import axios from 'axios';
import { createAction } from 'redux-actions';
import { CHARACTER_INIT } from '../constants/ActionTypes';
import apiDetails from '../constants/Api';

export const init = createAction(CHARACTER_INIT);

export function getCharacters() {
	const { host, apiKey, characters } = apiDetails.api;

	return (dispatch, getState) => {
		const { offset } = getState().characters;
		const url = `${host}${characters}?apikey=${apiKey}&orderBy=-modified&offset=${offset}&limit=24`;
		axios.get(url).then((response) => dispatch(init(response.data)));
	};
}
