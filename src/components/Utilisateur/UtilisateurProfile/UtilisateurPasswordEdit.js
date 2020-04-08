
import React from "react";
import { Field, reduxForm } from 'redux-form'


// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row
} from "reactstrap";

class UtilisateurPasswordEdit extends React.Component {

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta, disabled, required, password }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        // console.log("input simple", input);

        return (
            <div className={className}>
                <label>{label}</label>
                <input type="password" disabled={disabled} password={password} required={required} {...input} autoComplete="off" />
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
                <Card className="card-user" >
                    <CardHeader>
                        <CardTitle tag="h4">Changer de password</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <label>mot de passe actuel</label><br />
                        <Field name="former_password" component={this.renderInput} label="" required />
                        <label>nouveau mot de passe</label><br />
                        <Field name="new_password1" component={this.renderInput} label="" required />
                        <label>confirmez votre nouveau mot de passe</label><br />
                        <Field name="new_password2" component={this.renderInput} label="" required />
                        <Row>
                            <div className="update ml-auto mr-auto">
                                <button className="ui button ">Valider</button>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </form>

        );
    }
}

const validate = formValues => {
    const errors = {};
    let passwordValid;

    if (!formValues.former_password) {
        errors.former_password = "Vous devez rentrer votre ancien mot de passe.";
    }

    if (formValues.new_password2) {

        if (formValues.new_password1 !== formValues.new_password2) {
            errors.new_password2 = "Vos 2 mots de passes ne sont pas identique.";
        } else {
            passwordValid = formValues.new_password2.length >= 5 ? true : false;
            errors.new_password2 = passwordValid ? "" : "password trop court";
        }
        return errors;
    }
};

export default reduxForm({
    form: 'utilisateurPasswordEdit',
    validate
})(UtilisateurPasswordEdit)
