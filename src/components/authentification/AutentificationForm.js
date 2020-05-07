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