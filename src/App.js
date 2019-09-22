import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './containers/Main.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles.css';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
            <Route path="/" component={Main} />
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default hot(App);
