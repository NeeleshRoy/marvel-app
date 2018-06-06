import { combineReducers } from 'redux';
import characters from './characters';
import single from './single';

const rootReducer = combineReducers({
	characters,
	single,
});

export default rootReducer;
