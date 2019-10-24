import React, { Component } from 'react';
import Form from '../components/Form.jsx';

import { connect } from 'react-redux';

import * as actions from '../actions/actionCreators';

class Body extends Component {
  state = {
    sourceLanguageCode: '',
    targetLanguageCode: '',
    text: '',
  };

  componentDidMount() {
    this.props.getLanguages();
  }

  checkDisability = () => {
    const { sourceLanguageCode, targetLanguageCode, text } = this.state;
    if (
      sourceLanguageCode === 'Detect Language' ||
      targetLanguageCode === 'Select Language'
    )
      return true;
    if (!text || !targetLanguageCode || !sourceLanguageCode) return true;
    return false;
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  translateText = () => {
    const { text, sourceLanguageCode, targetLanguageCode } = this.state;
    this.props.translateText(text, sourceLanguageCode, targetLanguageCode);
  };
  render() {
    const { translatedText, errorMessage } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <p
            style={{
              textAlign: 'center',
              color: 'red',
              marginTop: '1.2em',
            }}
          >
            {errorMessage}
          </p>
          <div className="row">
            <Form
              name="sourceLanguageCode"
              textAreaName="text"
              textArea={this.state.text}
              handleChange={this.handleChange}
              defaultOption="Detect Language"
              placeholder="Enter Source Text Here"
            />
            <Form
              name="targetLanguageCode"
              handleChange={this.handleChange}
              translatedText={translatedText}
              placeholder="Your Free Translation"
              disabled="disabled"
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          disabled={this.checkDisability()}
          onClick={this.translateText}
        >
          <span
            className={this.props.loading && 'spinner-border spinner-border-sm'}
          ></span>
          {this.props.loading ? 'Translating...' : 'Translate'}
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  languages: { translatedText },
  loading,
  error,
}) => ({
  loading,
  translatedText,
  errorMessage: error,
});

export default connect(
  mapStateToProps,
  actions
)(Body);
