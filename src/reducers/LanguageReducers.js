import {
  DETECT_LANGUAGE,
  GET_LANGUAGES,
  TRANSLATE_TEXT,
} from '../actions/actionType';

const initialState = {
  text: {},
};

const LanguageReducers = (state = initialState, action) => {
  switch (action) {
    case GET_LANGUAGES:
      return Object.assign({}, state, { text: action.text });
    default:
      return state;
  }
};

export default LanguageReducers;
