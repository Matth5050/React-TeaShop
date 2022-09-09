import React from "react";
import TeaList from "./TeaList";
import NewTeaForm from "./NewTeaForm";


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({mainTeaList: newMainTeaList,
                  formVisibleOnPage: false });
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList} />
      buttonText = "Add Tea";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }


}

export default TeaControl;