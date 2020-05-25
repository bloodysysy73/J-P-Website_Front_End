import React from 'react';
import { connect } from 'react-redux'
import { fetchQuestions } from "../../actions/actionQuestions";
import { URL } from "../../variables/general";
import { NotificationManager } from 'react-notifications';


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
                'login': localStorage.getItem('login')
            }
        };
        console.log("FORMEVALUE", formeValue);

        axios({
            method: "POST",
            url: `${URL}/question/save`,
            data: formeValue,
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                NotificationManager.success("Votre question a été postée.", 3000);
                this.resetForm()
                //ce fetch est pour remettre le state à jour et re render la liste
                this.props.fetchQuestions();
            } else {
                NotificationManager.warning("Echec du post, veuillez rééssayer plus tard.", 3000);
            }
        }).catch((error) => {
            // Error 😨

            if (error.response ? true : false && error.response.status === 403) {
                NotificationManager.warning('Vous devez être connecté pour poser une question', 3000);
            } else if (error.response) {
                console.log("error 1 : request ", error.response.data, "cacth1 ", error.response.status);
            } else if (error.request && error.response) {
                console.log("error 2 : no response request http ", error.response.data);
            } else {
                console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
            }
            console.log("bilan de l'erreur :", error.config);
        });




        // history.push('/admin/dashboard')


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
                        <input type="text" className="form-control" id="titre" value={this.state.titre} onChange={this.onSubjectChange.bind(this)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="texte">Question</label>
                        <textarea className="form-control" rows="5" id="message" value={this.state.texte} onChange={this.onTextChange.bind(this)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Poser</button>
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

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps,
    { fetchQuestions }
)(QuestionForm);