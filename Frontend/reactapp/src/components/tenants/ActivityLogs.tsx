import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IDataLog } from '../../interface/Interfaces'
 
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
    itemLogs: {
      overflow: 'auto',
      height:520
    },
    texts: {
      textAlign:'start'
    }
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
        <div className={classes.itemLogs}>
        {props.dataLog.map(res => (
        <Grid item xs={12} key={res.id}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className={classes.texts}>
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
