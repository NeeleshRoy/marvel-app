import { createAction } from 'redux-actions';
import { GREET } from '../constants/ActionTypes';

export const greet = createAction(GREET, (event) => event.target.value);
