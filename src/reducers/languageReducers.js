import { GET_LANGUAGES, TRANSLATE_TEXT } from '../actions/actionType';

const initialState = {
  supportedLanguages: [],
  translatedText: '',
};

export const languages = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANGUAGES:
      return Object.assign(
        {},
        { ...state, supportedLanguages: action.languages }
      );
    case TRANSLATE_TEXT:
      return Object.assign({}, { ...state, ...action.text });
    default:
      return state;
  }
};
