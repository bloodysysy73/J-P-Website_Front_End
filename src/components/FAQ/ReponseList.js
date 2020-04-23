import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { findQuestionById, deletereponse } from '../../actions/actionQuestions'


class ReponseListe extends React.Component {

  componentDidMount() {
    this.props.findQuestionById(this.props.match.params.id);
  }

  renderContent = () => {
    return `Ici les réponses`
  }

  renderButtonSuppress(id) {
    if (localStorage.getItem("isAdmin")) {
      return (<div className="text-center" ><button onClick={() => this.props.deletereponse(id, this.props.match.params.id)} className="btn btn-danger">supprimer reponse</button></div>)
    }
  }



  renderList = () => {

    if (this.props.question) {
      return this.props.question.reponses.map(reponse => {
        return (
          <div className="item" key={reponse.id}>
            <div className="content">
              <p className="header">
                réponse : {reponse.texte}
              </p>
              <div className="description">de : {reponse.loginUser}</div>
              <div className="description">le : {reponse.date}</div>
            </div>{this.renderButtonSuppress(reponse.id)}<hr />
          </div >
        )
      })
    } else { return <div>erreur</div> }

  }

  render() {
    //const { id } = this.props.match.params;
    //const reponse = [this.props.reponse];
    return (
      <Modal
        title={this.props.question ? this.props.question.titre : 'Question'}
        question={this.props.question ? this.props.question.texte : ''}
        content={this.renderList()}
        onDismiss={() => history.push('/admin/faq')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { question: state.questions[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { findQuestionById, deletereponse }
)(ReponseListe);
