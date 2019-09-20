import { GET_LANGUAGES } from '../actions/actionType';

const initialState = {
  supportedLanguages: [],
};
export const languages = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANGUAGES:
      return Object.assign(
        {},
        { ...state, supportedLanguages: action.languages }
      );
    default:
      return state;
  }
};
