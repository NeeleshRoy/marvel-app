import { GREET } from 'constants/ActionTypes';

const initialState = {
	message: ''
};

export default function home(state = initialState, action) {
	switch (action.type) {
		case GREET:
			return { ...state, message: action.payload };
		default:
			return state;
	}
}
