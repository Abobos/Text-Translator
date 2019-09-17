import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Form from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';

class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <Form
              defaultOption="Detect Language"
              placeholder="Enter Source Text Here"
            />
            <Form placeholder="Your Free Translation" disabled="true" />
          </div>
        </div>
        <button type="button" className="btn btn-primary btn-block">
          Translate
        </button>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
