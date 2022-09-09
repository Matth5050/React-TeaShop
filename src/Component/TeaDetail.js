import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, counter } = props;

  return (
    <React.Fragment>
      <h1>Tea Detail</h1>
      <h3>{tea.name} - {tea.origin}</h3>
      <p><em>{tea.price}</em></p>
      <p><em>{tea.steep}</em></p>
      <p><em>{counter}</em></p>
      <button onClick={props.onRestockClick}>Restock Tea</button>
      <button onClick={props.onClickingEdit}>Edit Tea</button>
      <button onClick={()=> onClickingDelete(tea.id) }>Delete Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onRestockClick: PropTypes.func
};

export default TeaDetail;