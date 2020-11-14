import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person';
import { ITenant, IDataLog } from '../../interface/Interfaces'
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paperModal: {
      backgroundColor: theme.palette.background.paper,
      minWidth: 800,
      minHeight: 500,
      padding: 20,
    },
  }),
);

interface IProps {
  dataLog: IDataLog[]
}

export default function ActivityLogs(props: IProps) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div style={{overflow:'auto', height:520}}>
        {props.dataLog.map(res => (
        <Grid item xs={12} key={res.id}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div style={{textAlign:'start'}}>
                  <Typography variant="body2" gutterBottom> <b>{res.user}</b> {res.message}</Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        ))}
        </div>
        
      </Grid>
      </div>
  )
}
