import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

interface IData {
  children: React.ReactNode
}

export default function Floor(props: IData) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  interface IItem {
    title: string
    panel: string
  }

  const ITEMS: IItem[] = [
    {
      title: 'First Floor',
      panel: 'panel1'
    },
    {
      title: 'Second Floor',
      panel: 'panel2'
    },
    {
      title: 'Third Floor',
      panel: 'panel3'
    },
    {
      title: 'Fourth Floor',
      panel: 'panel4'
    },
    {
      title: 'Five Floor',
      panel: 'panel5'
    },
  ]

  return (
    <div>
      {ITEMS.map(item => (
        <Accordion square expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
          <AccordionSummary>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {props.children}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
