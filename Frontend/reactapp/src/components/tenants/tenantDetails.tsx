import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

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
  }),
);

export default function TenantDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container justify="flex-start" alignItems="flex-start" spacing={3}>
              <Grid item xs={12} style={{backgroundColor:'#e1e1e1'}}>
                <Avatar style={{float:'left'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div>
                  <Typography>{'John Isaac B Caasi'}</Typography>
                  <Typography>{'Philippines Urban Living Solutions'}</Typography>
                </div>
              </Grid>
              <Grid item xs={6} style={{ backgroundColor: '#cdcdcd' }}>
                <div style={{float:'left'}}>
                  <Typography>Province: {'Metro Manila'}</Typography>
                  <Typography>City: {'Pasay'}</Typography>
                  <Typography>House no.: {'1234 st.'}</Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
