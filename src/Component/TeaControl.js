import React from "react";
import TeaList from "./TeaList";
import NewTeaForm from "./NewTeaForm";


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm />
    } else {
      currentlyVisibleState = <TeaList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }


}

export default TeaControl;