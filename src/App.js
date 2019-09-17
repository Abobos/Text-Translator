import { hot } from 'react-hot-loader/root';
import React from 'react';

import Main from './containers/Main.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles.css';

const App = () => {
  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
};

export default hot(App);
