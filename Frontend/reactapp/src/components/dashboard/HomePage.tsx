import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

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

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>
            xs=3
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>
            xs=3
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>
            xs=3
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>
            xs=3
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>
            xs=6
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>
            xs=6
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>
            xs=12
          </Paper> */}
          <Skeleton animation="wave" variant="rect" height={50}/>
        </Grid>
      </Grid>
    </div>
  );
}
