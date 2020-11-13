import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {IRoom, ITenantData, IFloor} from '../../interface/Interfaces'
import { ROOMS1st, ROOMS2nd } from '../../defaults/restData'
import RoomCard from '../roomCard'

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

interface IProps {
  itemFloor: IFloor[]
}

export default function Floor(props: IProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {props.itemFloor.map(item => (
        <Accordion square expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
          <AccordionSummary>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.data.length > 0 ? (
              <RoomCard data={item.data}/>
            ): (
              'No Units Available'
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
