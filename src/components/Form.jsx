import React from 'react';

const Form = ({ placeholder, defaultOption, disabled }) => (
  <React.Fragment>
    <div className="Form mt-3 col-sm-6 ">
      <div className="form-group">
        <select name="languages" className="form-control-sm">
          <option selected>{defaultOption || 'Select Language'}</option>
        </select>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            placeholder={placeholder}
            rows="15"
            disabled={disabled || ''}
          ></textarea>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Form;
