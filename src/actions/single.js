import axios from 'axios';
import { createAction } from 'redux-actions';
import { SINGLE_CHARACTER } from '../constants/ActionTypes';
import apiDetails from '../constants/Api';

export const init = createAction(SINGLE_CHARACTER);

export function getCharacter(id) {
	const { host, apiKey, characters } = apiDetails.api;
	return (dispatch) => {
		const url = `${host}${characters}/${id}?apikey=${apiKey}`;
		axios.get(url).then((response) => dispatch(init(response.data)));
	};
}
