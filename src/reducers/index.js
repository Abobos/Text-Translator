import { combineReducers } from 'redux';
import { languages } from '../reducers/LanguageReducers';

const rootReducer = combineReducers({
  languages,
});

export default rootReducer;
