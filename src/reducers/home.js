import { GREET, HOME_INIT } from '../constants/ActionTypes';

const initialState = {
	message: '',
	characters: [],
};

export default function home(state = initialState, action) {
	switch (action.type) {
		case GREET:
			return { ...state, message: action.payload };
		case HOME_INIT:
			return { ...state, characters: action.payload };
		default:
			return state;
	}
}
