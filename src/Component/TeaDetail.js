import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props){
  const { tea, onClickingDelete, onRestockClick } = props;

  return (
    <React.Fragment>
        <h1 className="text-center">Tea Detail</h1>
        <h3 className="text-center">{tea.name} - {tea.origin}</h3>
        <p className="text-center"><em>Price: {tea.price}</em></p>
        <p className="text-center"><em>Steep time in minutes: {tea.steep}</em></p>
        <p className="text-center"><em>stock: {tea.inventory}</em></p>
        <div className="text-center mb-5">
          <button className="btn btn-outline-primary mx-2" onClick={()=> onRestockClick()}>Restock Tea</button>
          <button className="btn btn-outline-primary mx-2" onClick={props.onBuyClick}>Buy Tea</button>
          <button className="btn btn-outline-primary mx-2" onClick={props.onClickingEdit}>Edit Tea</button>
          <button className="btn btn-outline-primary mx-2" onClick={()=> onClickingDelete(tea.id) }>Delete Tea</button>
        </div>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onRestockClick: PropTypes.func,
  onBuyClick: PropTypes.func
};

export default TeaDetail;