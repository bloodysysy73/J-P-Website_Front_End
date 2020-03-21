import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objet: "",
            email: "",
            texte: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:8080/message/mail",
            data: this.state,
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                alert("Message envoyé.");
                this.resetForm()
            } else {
                alert("Echec envoie du Message.")
            }
        })
    }

    resetForm() {

        this.setState({ objet: '', email: '', texte: '' })
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Objet</label>
                        <input type="text" className="form-control" id="objet" value={this.state.objet} onChange={this.onSubjectChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.texte} onChange={this.onTextChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onSubjectChange(event) {
        this.setState({ objet: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onTextChange(event) {
        this.setState({ texte: event.target.value })
    }
}

export default ContactForm;