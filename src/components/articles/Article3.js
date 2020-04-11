import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardFooter,
    Row,
} from "reactstrap";



class Article3 extends React.Component {

    render() {
        return (
            <div>
                <Card className="card-user">
                    <CardHeader className="text-center">
                        <div >
                            <img
                                alt="..."
                                src={require("assets/img/jumeaux1.jpg")}
                                width="300"
                            />
                        </div><hr />

                    </CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Attendre des jumeaux : des précautions à prendre</CardTitle>
                        <p align="justify">



                            Attendre des jumeaux : des précautions à prendre

                            Vous n'attendez pas un enfant, mais deux… ou trois ?
                            Une grossesse multiple nécessite de prendre un certain nombre de précautions afin d'éviter notamment, une naissance prématurée.
                            Rejoindre une association de « parents à naissances multiples » peut d'ailleurs, à plus d'un titre, s'avérer utile…
                        </p >
                        <CardTitle tag="h5">Des risques qu’il s’agit de prévenir</CardTitle>

                        <p align="justify" >
                            Le risque le plus fréquent lors d’une grossesse multiple est l’accouchement prématuré, c’est-à-dire la naissance de l’enfant avant 37 semaines d’aménorrhées,
                            qui représente près de la moitié des naissances gémellaires contre 5% pour les autres grossesses.
                            Les pathologies chez le nouveau-né liées à une trop grande prématurité sont nombreuses : respiratoires, infectieuses, hémorragiques, digestives…
                            Le diagnostic précoce de la grossesse multiple est donc essentiel à la mise en œuvre des différentes mesures de prévention de la prématurité.
                        </p>

                        <CardTitle tag="h5">Les précautions à prendre</CardTitle>

                        <p align="justify">

                            La principale mesure de prévention ?
                            Le repos, qui peut passer selon les cas par la modération –aménagement du temps et des conditions de travail avec l’aide du médecin
                            - voire l’arrêt de l’activité professionnelle. La pratique d’un sport de manière intensive est aussi proscrite,
                            mais la natation ou la marche peuvent en principe être pratiquées, toujours selon avis médical.
                        </p>

                        <CardTitle tag="h5"> Partager ses expériences</CardTitle>

                        <p align="justify">
                            "Rencontrer et partager son expérience au sein d’une association de parents à naissances multiples peut être un excellent rempart contre l’anxiété",
                            selon Frédérique Aubier, maman et bénévole de l’association « Jumeaux et plus »,
                            qui apporte une entraide morale et matérielle à ses adhérents (coordonnées d’échographes spécialisés dans les grossesses gémellaires,
                            informations sur les démarches administratives, édition d’un petit guide pour les futures mamans, etc.).
                            Sur son site, des contacts au niveau départemental vous seront fournis.</p>

                        <br />
                        <hr />

                    </CardBody>

                    <CardFooter>
                        <Row className="text-center">
                            <div className="button-container">
                            </div>
                        </Row>

                    </CardFooter>
                </Card>

            </div>
        );
    }
}

export default Article3;
