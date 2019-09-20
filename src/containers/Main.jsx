import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actionCreators';

import Navbar from '../components/Navbar.jsx';
import Form from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';

class Main extends Component {
  state = {
    sourceLanguageCode: '',
    targetLanguageCode: '',
    text: '',
  };

  componentDidMount() {
    this.props.getLanguages();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { supportedLanguages } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <Form
              name="souceLanguageCode"
              textAreaName="text"
              textArea={this.state.text}
              handleChange={this.handleChange}
              languages={supportedLanguages}
              defaultOption="Detect Language"
              placeholder="Enter Source Text Here"
            />
            <Form
              name="targetLanguageCode"
              handleChange={this.handleChange}
              languages={supportedLanguages}
              placeholder="Your Free Translation"
              disabled="disabled"
            />
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

const mapStateToProps = ({ languages }) => {
  return {
    supportedLanguages: languages.supportedLanguages,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Main);
