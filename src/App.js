import { hot } from 'react-hot-loader/root';
import React from 'react';
import './styles.css';

const App = () => {
  console.log(process.env.API_KEY);
  return <h1>Welcome</h1>;
};

export default hot(App);
