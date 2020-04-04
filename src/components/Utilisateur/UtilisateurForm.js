import React from 'react'
import { Field, reduxForm } from 'redux-form'
import history from '../../history'


class UtilisateurForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  renderInput = ({ input, label, meta, disabled }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    console.log("input simple", input);

    return (
      <div className={className}>
        <label>{label}</label>
        <input disabled={disabled} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  renderInputPassword = ({ input, label, meta, disabled, isCreation }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    console.log("input simple", input);

    if (isCreation) {
      return (
        <div className={className}>
          <label>{label}</label>
          <input disabled={disabled} {...input} autoComplete="off" />
          {this.renderError(meta)}
        </div>
      )
    } else { return <div></div> }
  }


  renderSelect = ({ input, label, meta, option1, option2 }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <select {...input} autoComplete="off">
          <option value="true">{option1}</option>
          <option value="false">{option2}</option>
        </select>
        {this.renderError(meta)}
      </div>
    )
  }

  renderCheckBox = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    console.log("checkbox input", input);
    console.log("checkbox value", input.value);

    return (
      <div className={className}>
        <label>{label}</label>
        <input  {...input} type="checkbox" >
        </input>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    console.log("props du form : ", this.props)
    // console.log("la value que j'envoie : ", this.props.initialValues.adherent)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="id" component={this.renderInput} label="id de l'utilisateur" disabled />
        <Field name="login" component={this.renderInput} label="Entrez le nouveau login (obligatoire)" required />
        <Field name="pseudo" component={this.renderInput} label="Enter le nouveau pseudo" />
        <Field name="nom" component={this.renderInput} label="nom" />
        <Field name="prenom" component={this.renderInput} label="prenom" />
        <Field name="adresse" component={this.renderInput} label="adresse" />
        <Field name="dateInscription" component={this.renderInput} label="Date d'inscription" />
        <Field name="adherent" component={this.renderCheckBox} label="Est-ce un adhérent ?" />
        <Field name="password" isCreation={this.props.isCreation} component={this.renderInputPassword} label="password (obligatoire)" required />

        <button className="ui button primary" onClick={() => history.push('/admin/administration')}>Retour </button>
        <button className="ui button primary">Valider</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.login) {
    errors.login = 'login obligatoire'
  }


  return errors
}

export default reduxForm({
  form: 'utilisateurForm',
  validate
})(UtilisateurForm)
