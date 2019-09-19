import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actionCreators';

import Navbar from '../components/Navbar.jsx';
import Form from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';

class Main extends Component {
  async componentDidMount() {
    this.props.getLanguages();
  }

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
            <Form placeholder="Your Free Translation" disabled="disabled" />
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

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions
)(Main);
