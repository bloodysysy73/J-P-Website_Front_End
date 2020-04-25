import React from "react";
import { connect } from "react-redux";
import { connexionEmail } from "../../actions/actionLogin";
import AuthentificationForm from "./AutentificationForm";
//import _ from "lodash";
import history from "../../history";


class LoginEmailForm extends React.Component {
  state = { isSignedInEmail: null }

  componentDidMount() {
    //this.auth.isSignedInEmail = localStorage.getItem('isSignedInEmail');
  }

  onSubmit2 = formValues => {
    this.props.connexionEmail(formValues);
    history.push("/");
  };

  render() {
    return (
      <div>
        <AuthentificationForm
          // initialValues={_.pick(this.props.user, "login", "password")}
          onSubmit={this.onSubmit2}
          buttonName="se connecter"
        ></AuthentificationForm>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedInEmail: state.auth.isSignedInEmail
  }
};

export default connect(mapStateToProps, { connexionEmail })(LoginEmailForm);
