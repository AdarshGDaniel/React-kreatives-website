import React from 'react';
import './FAQ.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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


function FAQ(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);}


    return (
        <section className="mar-top-bot-50 mar-top-100" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div><div className="heading-underline"></div></div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <Accordion className="accordion-box" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography className={classes.heading}>How is KarunyaHacks beneficial?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        It provides students a chance to explore their technical Skills.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <Accordion className="accordion-box" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography className={classes.heading}>How often does karunyaHacks host events?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        We host two events very month
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <Accordion className="accordion-box" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography className={classes.heading}>What should I bring?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        All participants are requested to bring their personal laptop and any related resources required to design your dream.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <Accordion className="accordion-box" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="icon-faq" />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                        <Typography className={classes.heading}>Is coding experince required?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Ofcourse not! All students who want to learn about technology,design and building innovative products are welcome.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>            
        </section>
    );
}

export default FAQ