import React from "react";
import PropTypes from "prop-types";

function Tea(props) {


  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <h5>{props.price}</h5>
        <h5>Steep for {props.steep} minutes</h5>
        <h5>We have about {props.inventory} servings left</h5>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  steep: PropTypes.string,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;