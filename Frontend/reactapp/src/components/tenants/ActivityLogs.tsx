import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip'
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
          <React.Fragment>
            <Tooltip title={
              <React.Fragment>
                <div style={{width:300}}>
                  <Typography>
                    {res.user} {res.message}
                  </Typography>
                </div>
              </React.Fragment>
            } placement="left" arrow>
              <Grid item xs={12} key={res.id}>
                <Paper style={{padding:10}}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <div>
                        <Typography variant="body2" gutterBottom>
                          <b>{res.user}</b>
                          {res.message.length > 55 ? `${res.message.substr(0, 55)}...` : res.message}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Tooltip>
          </React.Fragment>
        ))}
          
        </div>
        
      </Grid>
      </div>
  )
}
