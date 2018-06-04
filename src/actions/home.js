import { GREET } from 'constants/ActionTypes';
import { createAction } from 'redux-actions';

export const greet = createAction(GREET, (event) => event.target.value);
