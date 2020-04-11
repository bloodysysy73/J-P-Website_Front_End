import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardFooter,
    Row,
} from "reactstrap";


class Article1 extends React.Component {

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
                        <CardTitle tag="h5">"Vrais" ou "Faux"</CardTitle>

                        <p align="justify">
                            Il existe deux types de jumeaux: les jumeaux monozygotes ou "vrais" jumeaux et les jumeaux dizygotes ou "faux" jumeaux.
                            Jumeaux Monozygotes (MZ) ou "vrais" jumeaux.
                        </p >

                        <p align="justify" >
                            Les jumeaux monozygotes sont génétiquement identiques, ils ont 100% de leurs gènes en commun et donc se ressemblent comme deux gouttes d’eau.
                            Ils sont de même sexe, ont la même couleur de cheveux, d’yeux, le même groupe sanguin, etc...
                            Les "vrais" jumeaux proviennent d’un seul ovule fécondé qui s’est divisé «accidentellement » en deux durant les deux premières semaines suivant la fécondation.
                            Pour plus d'informations, lire notre article : les "vrais" jumeaux ou jumeaux monozygotes.
                        </p>

                        <p align="justify">
                            Jumeaux Dizygotes (DZ) ou "faux" jumeaux.
                            Le terme "faux" jumeaux peut être perçu péjorativement car ce sont des jumeaux à part entière.
                            Les jumeaux dizygote peuvent être aussi différents physiquement que n’importe quel frère ou sœur. En moyenne ils partagent 50% de leurs gènes.
                            Ils peuvent être de même sexe ou de sexe différent.
                            Les"faux" jumeaux proviennent de deux ovules différents fécondés par deux spermatozoïdes différents.
                            Pour plus d'informations, lire notre article : les "faux" jumeaux ou jumeaux dizygotes.
                        </p><br />
                        <div className="text-center">
                            <img
                                alt="..."
                                src={require("assets/img/type_grossesse.png")}
                                width="700"
                            />
                        </div>
                        <hr />

                        <CardTitle tag="h5">Fréquence et nombre de jumeaux</CardTitle>

                        <p align="justify">
                            Il y aurait environ 125 millions de jumeaux dans le monde. La moitié de ces jumeaux seraient nés en Afrique.
                            </p >
                        <p align="justify">
                            Environ 1/3 des "faux" jumeaux est conçu au moyen de méthodes d'aide à la procréation dans les pays développés,
                            jusqu'à 90% des triplés et virtuellement tous les multiples de plus haut rang.
                            </p >

                        <p align="justify" >
                            <i>Fréquence "spontanée" de naissances de multiples :</i><br /><br />

                            <b>Jumeaux</b> -> 1/100 (approximativement, 1 naissance sur 100 est une naissance de jumeaux conçus spontanément,
                             ou encore 1 enfant sur 50 est un jumeau conçu naturellement)<br /><br />

                            <b>Triplés</b> -> 1/8.500<br /><br />

                            <b> Quadruplés</b> -> 1/600.000<br /><br />

                            <b>Quintuplés</b> -> 1/54.000.00
                            </p>

                        <p align="justify">
                            De nombreux facteurs influencent l’apparition de "faux" jumeaux et donc les ratios "faux" jumeaux/ "vrais" jumeaux sont très divergents entre régions du globe.
                            Environ 3/4 des jumeaux sont des "faux" jumeaux et 1/4 sont des "vrais" jumeaux.
                            </p><br />

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

export default Article1;
