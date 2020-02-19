import React from "react";
import { connect } from "react-redux";
import { connexionEmail } from "../../actions/actionLogin";
import AuthentificationForm from "./AutentificationForm";
import _ from "lodash";
import history from "../../history";

//dans les props de cee composant on a param qui a la variable id qu'on a passé dans le router

class LoginEmailForm extends React.Component {
  onSubmit2 = formValues => {
    this.props.connexionEmail(formValues);
    history.push("/");
  };

  render() {
    return (
      //initialValue is a specific key form of redux, it is use for having initial values (as an object) in the child component.
      // the values pair in the object look at the field with the same name as them in the child component
      //_pick create a new object with the values paire picked  in the first object, here it is equivalent to : {title :this.props.stream.title,
      // description : this.props.stream.description}
      <div>
        <AuthentificationForm
          initialValues={_.pick(this.props.user, "login", "password")}
          onSubmit={this.onSubmit2}
          buttonName="se connecter"
        ></AuthentificationForm>
      </div>
    );
  }
}
const mapStateToProps = state => {};

export default connect(mapStateToProps, { connexionEmail })(LoginEmailForm);
