import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Article1 from 'components/articles/Article1';
import Article2 from 'components/articles/Article2';
import Article3 from 'components/articles/Article3';
import Article4 from 'components/articles/Article4';
import Article5 from 'components/articles/Article5';
import Article6 from 'components/articles/Article6';


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
                    <Typography className={classes.heading}>LE MINIMUM À SAVOIR SUR LES JUMEAUX</Typography>
                    <Typography className={classes.secondaryHeading}></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Article1></Article1>
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
                    <Typography className={classes.heading}>RISQUES/CHANCES D'AVOIR DES JUMEAUX</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Article2></Article2>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>ATTENDRE DES JUMEAUX : DES PRÉCAUTIONS À PRENDRE</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Article3></Article3>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>MISE À DISPOSITION DE MATÉRIEL</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Article4></Article4>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>PRÊT DE VÊTEMENTS ET PETIT MATÉRIEL</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Article5></Article5>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>RÉDUCTIONS / PARTENAIRES</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="container">
                        <Typography>
                            <Article6></Article6>
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
