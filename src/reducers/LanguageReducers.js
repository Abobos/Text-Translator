import { GET_LANGUAGES } from '../actions/actionType';

const initialState = {
  languages: [],
};

export const languages = (state = initialState, action) => {
  switch (action) {
    case GET_LANGUAGES:
      return Object.assign({}, state, { languages: action.languages });
    default:
      return state;
  }
};
