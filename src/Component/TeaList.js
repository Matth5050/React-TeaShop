import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList(props) {

    return (
      <React.Fragment>
        <div className="form-group d-flex flex-row justify-content-center text-center row">
          <div className="mb-2">
          {props.teaList.map((tea) =>
          <Tea 
          whenTeaClicked = { props.onTeaSelection }
          name={tea.name}
          origin={tea.origin}
          price={tea.price}
          steep={tea.steep}
          inventory={tea.inventory}
          id={tea.id}
          key={tea.id}
          />
          )}
          </div>
        </div> 
      
      </React.Fragment>
    );
  }

  TeaList.propTypes = {
    teaList: PropTypes.array,
    onTeaSelection: PropTypes.func
  };

export default TeaList;