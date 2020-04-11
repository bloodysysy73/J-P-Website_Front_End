import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardFooter,
    Row
} from "reactstrap";


class Article2 extends React.Component {

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
                        <p align="justify">
                            Les jumeaux représentent de 1% à 3% des grossesses.
                            Ce pourcentage peut varier selon les pays. Il y aurait environ 125 millions d’individus dans le monde actuellement.
                        </p >
                        <CardTitle tag="h5">Les "vrais" jumeaux</CardTitle>

                        <p align="justify" >
                            On n’a toujours pas percé les mystères de la conception de jumeaux monozygotes appelés "vrais" jumeaux. Ce serait un "accident" de la nature.
                            Tout le monde aurait la même chance d’en avoir : sa fréquence d’apparition serait de 1/250 à 1/350 grossesses selon les estimations les plus fréquentes.
                            Pour une raison non élucidée, les traitements contre la stérilité augmentent les chances d’avoir de "vrais" jumeaux.
                        </p>

                        <CardTitle tag="h5">Les "faux" jumeaux</CardTitle>

                        <p align="justify">
                            Les chances de concevoir des jumeaux dizygotesappelés "faux" jumeaux sont favorisées par des facteurs connus mais pas souvent identifiés : <br />

                            <i>Procréation médicalement assistée</i>
                        L’utilisation de traitement contre la stérilité augmentent les chances d'avoir de jumeaux de 0% à 40%. Exemples:

                        Diverses techniques de stimulation ovariennes
                        Fécondation in vitro (FIV) : transfert d’œufs fécondés dans l’espoir qu’au moins un se développe, augmente les chances de grossesses gémellaires.

                            <i>Age de la mère :</i> les femmes qui conçoivent à plus de 35 ans ont de 3 à 4 fois plus de chances d’avoir des multiples par rapport aux femmes plus jeunes. <br />

                            <i>Génétique :</i> dans certaines familles, le taux d’hormones favorisant la production des ovules est particulièrement élevé.
                             Les femmes de ces familles ont donc plus de chance de concevoir des jumeaux naturellement. <br />

                            <i> Ethnie de la mère :</i> les femmes issues d'ethnies africaines ont plus de probabilité d’avoir des jumeaux.
                            Les femmes blanches (ou caucasiennes) viennent ensuite, suivies des asiatiques.
                             Les origines raciales/ethniques telles que les indiennes ou malaises, ont encore moins de chance de concevoir naturellement des multiples. <br />

                            <i>Habitudes alimentaires de la mère :</i>
                                Yam : chez une tribu appelée les Yoruba, une naissance sur 22 donne des jumeaux.
                                Cela serait dû à la consommation de la peau de Yam (patate douce) qui stimulerait l’ovulation.
                            Lait : une étude a conclu qu'une plus grande consommation de lait augmentait les chances/risques de concevoir des jumeaux. <br />

                            <i>Parité :</i> au même âge, la femme qui a donné naissance au plus grand nombre d'enfants aura plus de probabilité de concevoir des jumeaux que les autres. <br />

                            <i>Taille de la mère :</i> les femmes qui conçoivent de façon naturelle des "faux" jumeaux sont en général plus grandes
                             et plus charpentées morphologiquement que les autres. Ces femmes produisent de manière naturelle des hormones
                             qui stimulent l’ovulation et aident les embryons à survivre au début de leur développement. <br />

                            <i>Contraception orale :</i> tomber enceinte juste après avoir arrêté la contraception orale augmente la probabilité pour une femme d’avoir de "faux" jumeaux.
                        En effet les cycles ne se normalisent pas toujours tout de suite et certaines femmes produisent accidentellement
                             plusieurs ovules au cours des premiers cycles qui suivent la reprise. <br />

                            <i> Allaitement : </i> lorsqu’elle tombe enceinte, une femme qui allaite a plus de chance d’avoir des jumeaux pour les mêmes raisons que celles qui
                            arrêtent de prendre une contraception orale. <br />


                            Enfin, le simple hasard peut aussi donner des jumeaux !
                            </p>
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

export default Article2;
