import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="form-group d-flex flex-row justify-content-center my-4 text-center">
        <form className="form-control-lg" onSubmit={props.formSubmissionHandler}>
          <input
            className="row mb-2"
            type='text'
            name='name'
            placeholder='Name' />
          <input
            className="row mb-2"
            type='text'
            name='origin'
            placeholder='Origin' />
          <input
            className="row mb-2"
            type='text'
            name='price'
            placeholder='Price' />
          <input
            className="row mb-2"
            type='text'
            name='steep'
            placeholder='Steep time in minutes' />
          <button className="btn btn-outline-primary" type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;