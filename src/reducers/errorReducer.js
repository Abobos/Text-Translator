import { ERROR } from '../actions/actionType';

export const error = (state = '', action) => {
  switch (action.type) {
    case ERROR:
      return action.error;
    default:
      return state;
  }
};
