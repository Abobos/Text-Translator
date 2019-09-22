import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Body from './Body.jsx';
import Footer from '../components/Footer.jsx';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
