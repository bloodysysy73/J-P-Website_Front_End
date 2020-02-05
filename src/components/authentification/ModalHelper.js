import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import GoolgeAuth from "./GoolgeAuth";

class ModalHelper extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return (
      //react fragment allow to return 2 JSX block
      <React.Fragment>
        <GoolgeAuth></GoolgeAuth>
        <Link to="/" className="ui button">
          Facebook
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="How de you want to connect ?"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      ></Modal>
    );
  }
}

export default ModalHelper;
