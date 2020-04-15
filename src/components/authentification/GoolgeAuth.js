import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, createUserGoogle, connexionEmailGoogle } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import history from "../../history";

const axios = require("axios").default;

var ithappend = false;

class GoogleAuth extends React.Component {


  componentDidMount() {
    ithappend = false;
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "78258291645-b6663pugl7qru27d0aka9dfof54fe5cr.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      let googleId = this.auth.currentUser.get().getId();
      //let googleLogin = this.auth.currentUser.get().getBasicProfile().getEmail();
      //let id_token = this.auth.currentUser.get().getAuthResponse().id_token;

      this.props.signIn(googleId);
      //this.checkIfExistAndConnect(googleLogin);

    } else {
      this.props.signOut();
    }
  };

  //TODO : CREER UEN FONCTION : HTTPS avec le token google vers le backend pour verification
  checkIfExistAndConnect = (login) => {
    //checkif googleId existe dans les logins
    axios.get(`http://localhost:8080/user/loginexist/${login}`).then(res => {
      //console.log("response in auth change", res);
      if (res.data === true) {
        console.log('le login existe §§ CONNECTE');
        //TODO: se connecter avec le login gmail  
        //this.props.connexionEmailGoogle();
      } else if (res.data !== true) {
        //si le login exist pas dans la BDD on créé un compte. ithappen pour éviter double request
        console.log('le login existe pas §§ CREATE');
        if (ithappend !== true) {
          ithappend = true;
          this.props.createUserGoogle(login);
        }

      } else {
        console.log('je fais rien ');
      }

    }).catch((error) => {
      // Error 😨
      if (error.res) {
        console.log("error 1 : request http recup pseudo", error.res.data, "cacth1 ", error.res.status);
      } else if (error.request) {
        console.log("error 2 : no response request http ", error.res.data);
      } else {
        console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
      }
      console.log("bilan de l'erreur :", error.config);
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
    history.push("/");
  };

  onSignOutClick = () => {
    this.auth.signOut();
    history.push("/");
  };

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <FontAwesomeIcon icon={faGoogle} /> déconnexion
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <FontAwesomeIcon icon={faGoogle} /> connexion google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut, connexionEmailGoogle, createUserGoogle })(GoogleAuth);
