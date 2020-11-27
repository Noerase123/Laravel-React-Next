import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IBeds, IPersonalInfo } from '../../interface/Interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '60%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

interface IProps {
  personInfo: IPersonalInfo
  bedInfo: IBeds

}

export default function TenantBed(props: IProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  var person = props.personInfo
  var bed = props.bedInfo

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Paper style={{ backgroundColor: '#e1e1e1', padding: 15 }}>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <Grid container>
                <Grid item xs={4}>
                  <AccountCircleIcon style={{ height: 150, width: 150 }} />
                </Grid>
                <Grid item xs={8}>
                  <Grid container style={{padding:20}}>
                    <Grid item xs={9}>
                      <Typography variant="button"><b>{`${person.firstName} ${person.middleName.substr(0,1)} ${person.lastName}`}</b></Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="button"><b>{`${person.street} ${person.city}`}</b></Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography><b>{person.email}</b></Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography variant="button"><b>{person.contactNo}</b></Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <div>
                <Grid container style={{padding:10}} spacing={1}>
                  <Grid item xs={4}>
                    <Typography style={{float:'right'}} variant="button">Name</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="button"><b>{`${person.firstName} ${person.middleName.substr(0,1)} ${person.lastName}`}</b></Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography style={{float:'right'}} variant="button">Address</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="button"><b>{`${person.street} ${person.city}`}</b></Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography style={{float:'right'}} variant="button">Email</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography><b>{person.email}</b></Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography style={{float:'right'}} variant="button">Phone number</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="button"><b>{person.contactNo}</b></Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <List
              style={{float:'right'}}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Tenant Components
                </ListSubheader>
              }
              className={classes.root}
            >
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Personal Information" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Rent Information" />
              </ListItem>
              
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Billing Information" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </Grid>
        </Grid>  
      </Paper>
    </React.Fragment>
    
  );
}
