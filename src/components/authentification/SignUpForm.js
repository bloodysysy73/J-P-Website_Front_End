import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/actionUsers";
import AuthentificationForm from "./AutentificationForm";
import _ from "lodash";
import history from "../../history";

//dans les props de cee composant on a param qui a la variable id qu'on a passé dans le router

class SignUpForm extends React.Component {
  onSubmit2 = formValues => {
    this.props.createUser(formValues);
    history.push("/");
  };

  render() {
    return (
      <div>
        <AuthentificationForm
          initialValues={_.pick(this.props.user, "login", "password")}
          onSubmit={this.onSubmit2}
          buttonName="inscription"
        ></AuthentificationForm>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { createUser })(SignUpForm);
