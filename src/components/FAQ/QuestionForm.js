import React from 'react';

const axios = require("axios").default;
var formeValue;

class QuestionForm extends React.Component {

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    }

    constructor(props) {
        super(props);
        this.state = {
            titre: "",
            texte: ""
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        formeValue = {
            ...this.state,
            user: {
                'id': 0,
                'login': localStorage.getItem('login')
            }
        };
        console.log("FORMEVALUE", formeValue);
        const response = await axios.post("http://localhost:8080/question/save", {
            formeValue
        });

        //window.alert("Profil créé !");
        // history.push('/admin/dashboard')

        if (response.status === 200) {
            alert("Message envoyé.");
            this.resetForm()
        } else {
            alert("Echec envoie du Message.")
        }
    }

    resetForm() {
        this.setState({ titre: '', texte: '' })
    }

    render() {
        return (
            <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="titre">Objet</label>
                        <input type="text" className="form-control" id="titre" value={this.state.titre} onChange={this.onSubjectChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="texte">Message</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.texte} onChange={this.onTextChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onSubjectChange(event) {
        this.setState({ titre: event.target.value })
    }

    onTextChange(event) {
        this.setState({ texte: event.target.value })
    }
}

export default QuestionForm;