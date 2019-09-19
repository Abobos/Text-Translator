import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const configureStore = () => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default configureStore;
