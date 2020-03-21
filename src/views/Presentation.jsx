import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";



class Presentation extends React.Component {
  render() {
    return (
      <>
        <>
          <div className="content">
            <Row>
              <Col lg={true} md={true} sm={true}>
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-world-2 text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7" >
                        <div className="numbers">
                          <p className="card-category">ADHÉRER À L'ASSOCIATION</p>
                          <p />
                        </div><br />
                        <div >
                          Pour adhérer, 3 options très simples : </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-globe" />  Adhérer en ligne (sur le site nationale,
                        <a
                        href="http://www.jumeaux-et-plus.fr/adhesion-association/"
                        className="simple-text logo-mini"
                      >ici</a>
                      ), et nous vous contacterons très rapidement.
                  </div>
                    <div className="stats">
                      <i className="fas fa-download" /> Téléchargez le bulletin d'inscription <a
                        href="http://www.jumeauxetplus74.org/images/stories/bulletin_adhesion%202020.pdf"
                        className="simple-text logo-mini"
                      >ici</a>, vous y trouverez toutes les informations utiles.
                  </div>
                    <div className="stats">
                      <i className="far fa-handshake" /> Rendez-vous lors d'une de nos permanences (onglet "Nous trouver").
                  </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg={true} md={true} sm={true}>
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-circle-10 text-success" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">LES BÉNÉVOLES 2020</p>
                        </div> <br />

                        <div> L'équipe 2020 se compose de 11 bénévoles tous parents de jumeaux (et même plus !)</div>
                        <a
                          href="http://www.jumeauxetplus74.org/images/stories/bulletin_adhesion%202020.pdf"
                          className="simple-text logo-mini"
                        >(cliquez ici pour les voir)</a>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="far fa-hand-point-down" />  Rejoignez vous aussi l’équipe !
                    Que cela soit pour une aide ponctuelle ou plus longue tout adhérent prêt à nous aider
                    est le bienvenu.
                    Nous restons toutes et tous bénévoles, parents à temps pleins, et pour la plupart
                    en activité à temps complet. Nous avons donc besoin de votre soutien
                    et de votre aide pour que la roue continue de tourner dans cette belle aventure humaine
                    et associative.
                    Alors n'hésitez pas à vous manifester si vous souhaitez nous rejoindre !

                  </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg={true} md={true} sm={true}>
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-sun-fog-29 text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">LES AVANTAGES</p>
                        </div> <br />
                        <div>Entraide, mise à disposition de materiel,prêt de vetement, partenaire commerciaux et autre avanatges...</div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-info" /> Rendez-vous dans la section articles et dossiers !
                  </div>
                  </CardFooter>
                </Card>
              </Col>
              {/*<Col lg={true} md={true} sm={true}>
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Followers</p>
                          <CardTitle tag="p">+45K</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> Update now
                  </div>
                  </CardFooter>
                </Card>
              </Col> */}
            </Row>
            <Row>
              <Col >
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">PRÉSENTATION - QUI SOMMES NOUS ?</CardTitle>
                    <Row>
                      <Col >
                        <img alt="" src={require('../assets/img/presentation_jp.jpg')} width="auto" />
                      </Col>
                      <Col md="8" xs="7">
                        <Row><p className="card-category">JUMEAUX ET PLUS 73 est une association qui représente 200 familles, principalement de Haute-Savoie,
                    et qui a pour but l'entraide et l'information à destination des parents d'enfants issus de naissances multiples : jumeaux, triplés ou plus...</p>
                        </Row><br />

                        <Row>INFORMATION ET SOUTIEN MORAL</Row><br />
                        <Row><p className="card-category">
                          Le premier objectif de l’association est d'apporter les informations dont les futurs parents peuvent avoir besoin :
                          Informations pratiques, matérielles, prestations légales et extralégales auxquelles elles ont droit
                          (aides à domicile, travailleuses familiales, modes de garde, PMI,…)<br /><br />

                          Mais la principale raison d'être de l'association est surtout d'apporter un soutien moral aux futurs parents ou parents en ressentant le besoin.
                          Ainsi les bénévoles organisent des rencontres "Café papote" au local de Ballaison une fois par mois.
                          Chacun peut discuter de ses doutes, questions, vécus, anecdotes, etc avec d'autres parents dans un cadre convivial et chaleureux.
                          Aucune question ne reste sans réponse !<br /><br />

                          Les bénévoles tiennent aussi une permanence téléphonique.
                          Joignable tout au long de l'année les bénévoles sont là pour rassurer ou informer les parents ou futures parents de multiples.<br /><br />

                          Enfin, il existe également une liste de discussion par mail qui permet aux parents le souhaitant de partager questions,
                         astuces, bons plans avec toutes les familles inscrites.</p></Row><br />

                        <Row>ENTRAIDE MATÉRIELLE</Row><br />
                        <Row><p className="card-category">L’association propose une mise à disposition de gros matériel de puériculture
                        (poussettes doubles, poussettes canne, cosys, sièges auto, chaises hautes, parcs) avec petite participation financière.

                        Un prêt de petit matériel de puériculture et de vêtements (Prématurés à 3 ans) est proposé gracieusement.

                        Enfin, l'adhésion à l'association donne accès à une liste de partenaires nationaux et départementaux proposant des réductions aux familles de multiples.
                          Ainsi nos adhérents réalisent de belles économies !</p></Row><br />
                        <Row>PARUTIONS</Row><br />
                        <Row><p className="card-category">
                          • Guide des multiples, plus de 180 pages d'informations, témoignages, astuces, conseils, bonnes adresses, etc... Bref tout ce qu'il faut savoir pour préparer au mieux l'arrivée de multiples.<br />
                          • Multipl'Infos, le journal de la fédération nationale envoyé en boîtes aux lettres</p></Row><br />
                        <Row>ORGANISATION D'ÉVÉNEMENTS</Row><br />
                        <Row><p className="card-category">Toute l'équipe de bénévoles fait en sorte que tout au long de l'année parents et enfants se retrouvent
                         lors d'événements éducatifs, ludiques ou festifs pour le bonheur de tous !</p></Row><br />
                      </Col>
                    </Row>



                  </CardHeader>
                  <CardBody>

                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-sun-fog-29 text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">ENTRAIDE ET PERMANENCE TÉLÉPHONIQUE</p>
                        </div> <br />
                        <div> Des papas ou des mamans de multiples bénévoles vous répondent !</div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-info" />

Uniquement motivés par leur engagement solidaire, ils proposent de vous apporter soutien moral,
 conseils ou assistance dans vos démarches concernant votre nouvelle vie de parents d’enfants « nés à plusieurs ».

Petite précision, n’oubliez pas qu’eux aussi sont parents de jumeaux (ou plus !)
 donc soyez indulgents si ils ne répondent pas toujours instantanément. Wink

Si vous préférez de vraies rencontre n'hésitez pas à nous retrouver
 lors de nos permanences
                  </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="8">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-sun-fog-29 text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">XXXXXXXXXXX</p>
                        </div> <br />
                        <div>YUYYYYYYYYYYYYYYYY</div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-info" /> 555555555555555555
                  </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      </>
    );
  }
}

export default Presentation;
