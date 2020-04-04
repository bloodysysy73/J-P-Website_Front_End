import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Input,
    Row,
    Col
} from "reactstrap";

class UtilisateurProfileForm extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, meta, disabled }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <input disabled={disabled} {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderInputPassword = ({ input, label, meta, disabled, isCreation }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

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

    renderAdherent = ({ input, meta, disabled }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        if (input.value) {
            return (
                <div className={className}>
                    <input disabled={disabled} value="oui" autoComplete="off" />
                    {this.renderError(meta)}
                </div>
            )
        }
        else {
            return (
                <div className={className}>
                    <input disabled={disabled} value="Non" autoComplete="off" />
                    {this.renderError(meta)}
                </div>
            )
        }
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        //console.log("props du form : ", this.props)
        // console.log("la value que j'envoie : ", this.props.initialValues.adherent)
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                < Card className="card-user" >
                    <CardHeader>
                        <CardTitle tag="h5">Modifiez votre Profile</CardTitle>
                        <p className="description">Les champs "login", "date d'inscription" et "êtes-vous adérent" ne sont pas modifiable.
                        <br />Les champs login(email), adresse et nom sont privés et n'apparaissent pas sur votre profil public.
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col className="pr-1" md="5">
                                <label>-</label>
                                <Input
                                    defaultValue=""
                                    disabled
                                    placeholder="En cliquant sur validé votre profil sera mis à jour"
                                    type="text"
                                />
                            </Col>
                            <Col className="px-1" md="3">
                                <label>pseudo</label>
                                <Field name="pseudo" component={this.renderInput} />
                            </Col>
                            <Col className="pl-1" md="4">
                                <label htmlFor="exampleInputEmail1">
                                    login (email)
                          </label>
                                <Field name="login" component={this.renderInput} disabled required />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col className="pr-1" md="6">
                                <label>Prenom</label>
                                <Field name="prenom" component={this.renderInput} />
                            </Col>
                            <Col className="pl-1" md="6">
                                <label>nom de famille</label>
                                <Field name="nom" component={this.renderInput} />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col md="12">
                                <label>Addresse</label>
                                <Field name="adresse" component={this.renderInput} />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col className="pr-1" md="4">
                                <label>Date d'inscription</label>
                                <Field name="dateInscription" disabled component={this.renderInput} />
                            </Col>
                            <Col className="px-1" md="4">
                                <label>êtes-vous adhérent ? </label>
                                <Field name="adherent" disabled component={this.renderAdherent} />
                            </Col>
                            <Col className="pl-1" md="4">
                                <label>Nombre d'enfant</label>
                                <Field name="nbenfant" component={this.renderInput} />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col md="12">
                                <label>About Me</label>
                                <Field name="description" component={this.renderInput} />
                            </Col>
                        </Row><br />
                        <Row>
                            <div className="update ml-auto mr-auto">
                                <button
                                    className="ui button "
                                >
                                    Modifier Profile
                        </button>
                            </div>
                        </Row>
                    </CardBody>
                </Card >

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
})(UtilisateurProfileForm)