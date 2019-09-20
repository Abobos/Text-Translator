import { combineReducers } from 'redux';
import { languages } from '../reducers/LanguageReducers';
import { error } from '../reducers/errorReducer';

const rootReducer = combineReducers({
  languages,
  error,
});

export default rootReducer;
