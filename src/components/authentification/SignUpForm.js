import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/actionUsers";
import AuthentificationForm from "./AutentificationForm";
import _ from "lodash";
import history from "../../history";
import { Link } from 'react-router-dom'
import Modal from '../Modal'

//dans les props de cee composant on a param qui a la variable id qu'on a passé dans le router

class SignUpForm extends React.Component {
  onSubmit2 = formValues => {
    this.props.createUser(formValues);
  };

  renderContent() {
    return (
      <div>
        <AuthentificationForm
          initialValues={_.pick(this.props.user, "login", "password")}
          onSubmit={this.onSubmit2}
          buttonName="inscription"
          inscription
        ></AuthentificationForm>
      </div>
    );
  }

  renderActions = () => {

    return (
      <React.Fragment>
        <Link to="/admin/dashboard" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Modal
        title="Choisissez un email et un mot de passe."
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/admin/dashboard')}
      />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { createUser })(SignUpForm);
