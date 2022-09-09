import React from "react";
import PropTypes from "prop-types";


function Tea(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <h5>{props.price}</h5>
        <h5>{props.steep}</h5>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  steep: PropTypes.string,
  id: PropTypes.string,
  whenTeaClicked: PropTypes.func
};

export default Tea;