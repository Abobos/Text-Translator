import React from 'react';
import { connect } from 'react-redux';

const Form = ({
  placeholder,
  defaultOption,
  disabled,
  languages,
  textArea,
  textAreaName,
  translatedText,
  name,
  handleChange,
}) => (
  <React.Fragment>
    <div className="Form mt-3 col-sm-6 ">
      <div className="form-group">
        <select
          name={name}
          className="form-control-sm"
          onChange={handleChange}
          onBlur={handleChange}
        >
          <option value={defaultOption || 'Select Language'}>
            {defaultOption || 'Select Language'}
          </option>
          {Array.isArray(languages) &&
            languages.map(language => (
              <option key={language.language} value={language.language}>
                {language.name}
              </option>
            ))}
        </select>
        <div className="form-group mt-3">
          <textarea
            name={textAreaName}
            value={translatedText || textArea}
            onChange={handleChange}
            className="form-control"
            placeholder={placeholder}
            rows="8"
            disabled={disabled}
          ></textarea>
        </div>
      </div>
    </div>
  </React.Fragment>
);

const mapStateToProps = ({ languages }) => ({
  languages: languages.supportedLanguages,
});

export default connect(
  mapStateToProps,
  null
)(Form);
