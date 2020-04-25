import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MyUploader from 'components/other/MyUploader'
import history from '../../history'

import {
  Card,
  CardHeader,
  Row,
  Col,
  CardFooter
} from "reactstrap";

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

  onSubmitHandler = () => {
    //handler pour l'image
  }

  renderInputImage = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <MyUploader onSubmitImg={this.onSubmit3}></MyUploader>
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

  onSubmit3 = imageURL => {
    //console.log("onsubmit 3 image value : ", imageURL)
    this.props.onSubmit3(imageURL, this.props.initialValues.id)
  }

  render() {

    let display = this.props.isCreation ? 'none' : '';

    return (
      <>
        <hr />
        <form style={{ display: display }} onSubmit={this.props.handleSubmit(this.onSubmitHandler)}
          className="ui form error">
          <Card>
            <CardHeader></CardHeader>
            <CardFooter>
              <Row>
                <Col>
                  <label>Modifier l'image de l'evenement (2Mo maximum) </label>
                  <Field name="image" component={this.renderInputImage} />
                </Col>
              </Row><br />
            </CardFooter>
          </Card>
        </form>
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
      </>
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
