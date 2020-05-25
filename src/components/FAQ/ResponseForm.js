import React from 'react';
import { URL } from "../../variables/general";

const axios = require("axios").default;
var formeValue;

class ReponseForm extends React.Component {

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    }

    constructor(props) {
        super(props);
        this.state = {
            texte: ""
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        formeValue = {
            ...this.state,
            'loginUser': localStorage.getItem('login'),
            'pseudo': localStorage.getItem('pseudo'),
            'idQuestion': this.props.idQuestion
        };

        console.log("FORMEVALUE", formeValue);

        axios({
            method: "POST",
            url: `${URL}/reponse/save`,
            data: formeValue,
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                alert("Votre réponse a été postée.");
                this.resetForm()
                //ce fetch est pour remettre le state à jour et re render la liste
                //this.props.fetchQuestions();
                document.location.reload(true);

            } else {
                alert("Echec du post, veuillez rééssayer plus tard.")
            }
        }).catch((error) => {
            // Error 😨
            if (error.response.status === 403) {
                alert("Vous devez être connecté pour poster une réponse.");
            } else if (error.response) {
                console.log("error 1 : request ", error.response.data, "cacth1 ", error.response.status);
            } else if (error.request) {
                console.log("error 2 : no response request http ", error.response.data);
            } else {
                console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
            }
            console.log("bilan de l'erreur :", error.config);
        });

    }

    resetForm() {
        this.setState({ texte: '' })
    }

    render() {
        return (
            <div className="App container">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="texte">Répondez à {this.props.asker}</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.texte} onChange={this.onTextChange.bind(this)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Répondre</button>
                </form>
            </div>
        );
    }

    onTextChange(event) {
        this.setState({ texte: event.target.value })
    }
}



export default ReponseForm;