import React from "react";
import { connect } from "react-redux";
import { signIn, signOut, createUserGoogle, connexionEmailGoogle } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { ElasticBeanStalk } from "../../variables/general";
import { NotificationManager } from 'react-notifications';

import history from "../../history";


const axios = require("axios").default;

var ithappend = false;

class GoogleAuth extends React.Component {

  googleId;

  componentDidMount() {
    ithappend = false;
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "479915262149-5mfpd5lv59q93scecehcbdtin9ovie1c.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
          this.googleId = this.auth.currentUser.get().getId();
        });
    });
  }

  onAuthChange = isSignedIn => {
    let googleId = this.auth.currentUser.get().getId();

    if (isSignedIn) {

      let user = {
        'googleId': googleId,
        'googleLogin': this.auth.currentUser.get().getBasicProfile().getEmail(),
        'googleIdToken': this.auth.currentUser.get().getAuthResponse().id_token
      }

      this.props.signIn(googleId);
      this.checkIfExistAndConnect(user);

    } else {
      this.props.signOut();
    }
  };

  //TODO : CREER UEN FONCTION : HTTPS avec le token google vers le backend pour verification
  checkIfExistAndConnect = (user) => {
    //checkif googleId existe dans les logins
    axios.get(`${ElasticBeanStalk}/user/loginexist/${user.googleLogin}`).then(res => {
      //console.log("response in auth change", res);
      if (res.data === true) {
        //console.log('le login existe §§ CONNECTE');
        this.props.connexionEmailGoogle(user);
      } else if (res.data !== true) {
        //si le login exist pas dans la BDD on créé un compte. ithappen pour éviter double request

        if (ithappend !== true) {
          ithappend = true;
          this.props.createUserGoogle(user.googleLogin);
        }

      } else {
        console.log('je fais rien ');
      }

    }).catch((error) => {
      // Error 😨
      if (error.res) {
        console.log("error 1 : request http recup pseudo", error.res.data, "cacth1 ", error.res.status);
      } else if (error.request) {
        console.log("error 2 : no response request http ", error.request.data);
      } else {
        console.log('Error  http request Something happened in setting up the request and triggered an Error ', error.message);
      }
      console.log("bilan de l'erreur :", error.config);
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
    //this.props.signIn(this.googleId);
  };

  onSignOutClick = () => {
    this.auth.signOut();
    this.props.signOut();
    NotificationManager.warning('à bientôt =)', 'Vous êtes déconnecté', 3000);
    history.push("/admin/dashboard");

  };

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <FontAwesomeIcon icon={faGooglePlusG} /> déconnexion
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <FontAwesomeIcon icon={faGooglePlusG} /> connexion google
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
