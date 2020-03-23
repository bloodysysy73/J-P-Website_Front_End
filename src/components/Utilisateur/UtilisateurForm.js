import React from 'react'
import { Field, reduxForm } from 'redux-form'

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
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="login" component={this.renderInput} label="Entrez le nouveau login" />
        <Field name="pseudo" component={this.renderInput} label="Enter le nouveau pseudo" />
        <Field name="nom" component={this.renderInput} label="nom" />
        <Field name="prenom" component={this.renderInput} label="prenom" />
        <Field name="adresse" component={this.renderInput} label="adresse" />
        <Field name="dateInscription" component={this.renderInput} label="Date d'inscription" />
        <Field name="isAdherent" component={this.renderInput} label="Est-ce un adhérent ?" />





        <button className="ui button primary">Valider</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'utilisateurForm',
  validate
})(UtilisateurForm)
