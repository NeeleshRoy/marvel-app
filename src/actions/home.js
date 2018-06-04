import axios from 'axios';
import { createAction } from 'redux-actions';
import { GREET, HOME_INIT } from '../constants/ActionTypes';
import apiDetails from '../constants/Api';

export const greet = createAction(GREET, (event) => event.target.value);
export const init = createAction(HOME_INIT);

export function getCharacters() {
	const { host, apiKey, characters } = apiDetails.api;
	const url = `${host}${characters}?apikey=${apiKey}`;

	return (dispatch) => {
		axios.get(url).then((response) => dispatch(init(response.data)));
	};
}
