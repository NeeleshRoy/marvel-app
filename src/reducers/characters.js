import { CHARACTER_INIT } from '../constants/ActionTypes';

const initialState = {
	characters: [],
	offset: 0,
};

export default function home(state = initialState, action) {
	switch (action.type) {
		case CHARACTER_INIT:
			return { ...state, characters: action.payload, offset: state.offset + 50 };
		default:
			return state;
	}
}
