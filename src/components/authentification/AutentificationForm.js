import React from "react";
import { Field, reduxForm } from "redux-form";

class AuthentificationForm extends React.Component {
  renderInput = formProps => {
    const className = `field ${
      formProps.meta.touched && formProps.meta.error ? "error" : ""
      }`;

    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"></input>
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  onSubmit2 = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit2)}
      >
        <Field
          name="login"
          component={this.renderInput}
          label="Entrez votre email"
        ></Field>
        <Field
          name="password"
          component={this.renderInput}
          label="Entrez votre password"
        ></Field>
        <button className="ui button">{this.props.buttonName}</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  let emailValid;
  let passwordValid;

  if (!formValues.login) {
    errors.email = "Email obligatoire";
  } else {
    emailValid = formValues.login.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    errors.login = emailValid ? "" : "email invalide";
  }

  if (!formValues.password) {
    errors.password = "Password obligatoire";
  } else {
    passwordValid = formValues.password.length >= 5 ? true : false;
    errors.password = passwordValid ? "" : "password trop court";
  }
  return errors;
};

export default reduxForm({
  form: "authentificationForm",
  validate: validate
})(AuthentificationForm);
