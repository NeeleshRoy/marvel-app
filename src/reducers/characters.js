import { CHARACTER_INIT } from '../constants/ActionTypes';

const initialState = {
	characters: [],
};

export default function home(state = initialState, action) {
	switch (action.type) {
		case CHARACTER_INIT:
			return { ...state, characters: action.payload };
		default:
			return state;
	}
}
