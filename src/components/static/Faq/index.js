import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@material-ui/core';
import styles from './Styles';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = styles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={classes.root}>
      <Box mt={4} mb={6}>
        <Typography variant='h4'>
          Frenquently Asked Questions
        </Typography>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>
            Question 1: Title Description
          </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>
            Question 2: Title Description
          </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>
            Question 3: Title Description
          </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel6'}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.5rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box mt={4}>
        <Box mt={2}>
          <Typography variant='h6'>
            Question 4: Title Description
          </Typography>
        </Box>
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography style={{ paddingRight: '10rem' }}>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel8'}
          onChange={handleChange('panel8')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            style={{
              padding: '0.5rem 0.5rem 0.3rem',
            }}
          >
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              Nostrud exercitation ullamco laboris aliquip in
              reprehenderit in voluptate
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: '#FDF7F2',
            }}
          >
            <Typography>
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Nostrud exercitation ullamco
              laboris aliquip in reprehenderit in voluptate velit esse
              cillum dolore eu.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </section>
  );
};

export default Faq;
