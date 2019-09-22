import { combineReducers } from 'redux';
import { languages } from './languageReducers';
import { loading } from './loadingReducer';
import { error } from '../reducers/errorReducer';

const rootReducer = combineReducers({
  languages,
  loading,
  error,
});

export default rootReducer;
