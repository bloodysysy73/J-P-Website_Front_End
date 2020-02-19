import React from "react";
import { connect } from "react-redux";
import { logoutEmail } from "../../actions/actionLogin";
import history from "../../history";

class MyButton extends React.Component {
  //connect permet au fonction de dispacth when called. + les fonction sont dans le props du composant
  onSubmit = () => {
    this.props.logoutEmail();
    history.push("/");
  };

  render() {
    return (
      <div>
        <button className="ui button primary" onClick={this.onSubmit}>
          se déconnecter
        </button>
      </div>
    );
  }
}

export default connect(null, { logoutEmail })(MyButton);
