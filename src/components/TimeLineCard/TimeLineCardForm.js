import React from 'react'
import { Field, reduxForm } from 'redux-form'

class TimeLineCardForm extends React.Component {
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
        <Field name="id" component={this.renderInput} label="id de l'évenement" disabled />
        <Field name="title" component={this.renderInput} label="Titre (obligatoire)" required />
        <Field name="description" component={this.renderInput} label="Description" />
        <Field name="imageName" component={this.renderInput} label="image" />
        <Field name="title2" component={this.renderInput} label="Titre 2" />
        <Field name="description2" component={this.renderInput} label="Description2" />
        <Field name="date" component={this.renderInput} label="Date de l'évenement" />
        <Field name="heure" component={this.renderInput} label="Heure de l'évènement" />
        <Field name="poste_le" component={this.renderInput} label="Evenement posté le" disabled />

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
  form: 'timeLineCardForm',
  validate
})(TimeLineCardForm)
