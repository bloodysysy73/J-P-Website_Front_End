import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col
} from "reactstrap";
import UtilisateurList from "components/Utilisateur/UtilisateurList";
import TimeLineCardList from "components/TimeLineCard/TimeLineCardList";
import PublicationLineCardList from "components/PublicationLineCard/PublicationLineCardList";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>ADMINISTREZ EVENEMENTS ET PUBLICATIONS</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Row>
                                <Col md="12">
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md="6">
                                                    <Card className="card-plain">
                                                        <CardHeader>
                                                            <CardTitle tag="h5">Publication</CardTitle>
                                                            <p className="category">historique</p><br />
                                                        </CardHeader>
                                                        <CardBody>
                                                            <PublicationLineCardList></PublicationLineCardList>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                                <Col md="6">
                                                    <Card className="card-plain">
                                                        <CardHeader>
                                                            <CardTitle tag="h5">Evenements</CardTitle>
                                                            <p className="category">historique</p><br />
                                                        </CardHeader>
                                                        <CardBody>
                                                            <TimeLineCardList></TimeLineCardList>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>ADMINISTREZ UTILISATEUR</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Row>
                                <Col md="12">
                                    <Card>
                                        <CardBody>
                                            <div className="places-buttons">
                                                <Row>
                                                    <Col className="ml-auto mr-auto text-center" md="6">
                                                        <CardTitle tag="h5">utilisateur</CardTitle>
                                                        <p className="category">Dans la base de donnée jumeaux et plus savoie</p><br />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="ml-auto mr-auto" lg="8">
                                                        <Row>
                                                            <UtilisateurList></UtilisateurList>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
