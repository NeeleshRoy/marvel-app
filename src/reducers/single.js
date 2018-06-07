import { SINGLE_CHARACTER } from '../constants/ActionTypes';

const initialState = {
	character: {},
};

export default function home(state = initialState, action) {
	switch (action.type) {
		case SINGLE_CHARACTER:
			return { ...state, character: action.payload };
		default:
			return state;
	}
}
