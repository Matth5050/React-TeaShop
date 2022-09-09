import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";


function TeaList(props) {

    return (
      <React.Fragment>
        <div>
          {props.teaList.map((tea) =>
          <Tea 
          whenTeaClicked = { props.onTeaSelection }
          type={tea.name}
          title={tea.origin}
          description={tea.price}
          quantity={tea.roast}
          id={tea.id}
          key={tea.id}/>
          )}
        </div> 
      </React.Fragment>
    );
  }

  TeaList.propTypes = {
    teaList: PropTypes.array,
    onTeaSelection: PropTypes.func
  };

export default TeaList;