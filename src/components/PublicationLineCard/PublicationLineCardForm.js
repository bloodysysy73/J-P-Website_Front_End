import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MyUploader from 'components/other/MyUploader'
import history from '../../history'


class PublicationLineCardForm extends React.Component {
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
    // console.log("input simple", input);

    return (
      <div className={className}>
        <label>{label}</label>
        <input disabled={disabled} {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  renderInputImage = ({ input, label, meta, disabled }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <MyUploader></MyUploader>
      </div>
    )
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

    // console.log("checkbox input", input);
    // console.log("checkbox value", input.value);

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
    // console.log("props du form : ", this.props)
    // console.log("la value que j'envoie : ", this.props.initialValues.adherent)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="id" component={this.renderInput} label="id de la publication" disabled />
        <Field name="title" component={this.renderInput} label="Titre (obligatoire)" required />
        <Field name="description" component={this.renderInput} label="Description" />
        <Field name="title2" component={this.renderInput} label="Titre 2" />
        <Field name="description2" component={this.renderInput} label="Description2" />
        <Field name="imageName" component={this.renderInput} label="image" />
        <Field name="poste_le" component={this.renderInput} label="Publication posté le" disabled />

        <button className="ui button primary" onClick={() => history.push('/admin/administration')}>Retour </button>
        <button className="ui button primary">Valider</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'titre obligatoire'
  }


  return errors
}

export default reduxForm({
  form: 'publicationLineCardForm',
  validate
})(PublicationLineCardForm)
