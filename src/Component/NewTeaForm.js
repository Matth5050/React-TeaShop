import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTeaForm(props){
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTeaFormSubmission}
        buttonText="Create" />
    </React.Fragment>
  );


  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      roast: event.target.roast.value,
      id: v4()
    });
  }
}

NewTeaForm.propTypes = {
onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;