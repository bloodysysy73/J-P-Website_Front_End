import React from "react";

class AuthentificationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  resetForm() {
    this.setState({ login: '', password: '' })
  }

  render() {
    return (
      <div >
        <form id="connexion-form" onSubmit={this.handleSubmit.bind(this)} className="ui fluid form" >
          <div className="field">
            <input placeholder="Login" type="email" className="form-control" autoComplete="off" id="login" aria-describedby="emailHelp" value={this.state.login} required onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="field">
            <input minLength="5" type="password" placeholder="password" className="form-control" rows="5" id="password" value={this.state.password} required onChange={this.onPasswordChange.bind(this)} />
          </div>
          <button type="submit" className="ui button">connexion</button>
        </form>
      </div>
    );
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ login: event.target.value })
  }
}


export default AuthentificationForm;


// class AuthentificationForm extends React.Component {
//   renderInput = formProps => {
//     const className = `field ${
//       formProps.meta.touched && formProps.meta.error ? "error" : ""
//       }`;

//     return (
//       <div className={className}>
//         <label>{formProps.label}</label>
//         <input {...formProps.input} autoComplete="off"></input>
//         {this.renderError(formProps.meta)}
//       </div>
//     );
//   };

//   renderInputP = formProps => {

//     return (
//       <div className="field" >
//         <label>{formProps.label}</label>
//         <input {...formProps.input} type="password" autoComplete="off"></input>
//         {this.renderError(formProps.meta)}
//       </div>
//     );
//   };

//   renderError(meta) {
//     if (meta.touched && meta.error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{meta.error}</div>
//         </div>
//       );
//     }
//   }

//   onSubmit2 = formValues => {
//     this.props.onSubmit(formValues);
//   };

//   render() {
//     return (
//       <form
//         className="ui form error"
//         onSubmit={this.props.handleSubmit(this.onSubmit2)}
//       >
//         <Field
//           name="login"
//           component={this.renderInput}
//           label="Entrez votre email"
//         ></Field>
//         <Field
//           name="password"
//           component={this.renderInputP}
//           label="Entrez votre password"
//         ></Field>
//         <button className="ui button">{this.props.buttonName}</button>
//       </form>
//     );
//   }
// }

// const validate = formValues => {
//   const errors = {};
//   let emailValid;
//   let passwordValid;

//   if (!formValues.login) {
//     errors.email = "Email obligatoire";
//   } else {
//     emailValid = formValues.login.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

//     errors.login = emailValid ? "" : "email invalide";
//   }

//   if (!formValues.password) {
//   } else {
//     passwordValid = formValues.password.length >= 5 ? true : false;
//     errors.password = passwordValid ? "" : "password trop court";
//   }
//   return errors;
// };

// export default reduxForm({
//   form: "authentificationForm",
//   validate: validate
// })(AuthentificationForm);
