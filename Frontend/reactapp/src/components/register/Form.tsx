import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    center: {
        textAlign: 'center'
    },
    margins: {
        marginLeft: 150,
        marginRight: 150
    }
  }),
);

export default function Form() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Typography variant="h4" gutterBottom>
                        Register Tenant
                    </Typography>
                    <Divider/>
                    <br/>
                    <div className={classes.margins}>
                        <Typography variant="h6" gutterBottom>
                            First name
                        </Typography> 
                        <TextField id="firstname" size="small" label="Enter your Firstname" variant="outlined" fullWidth />

                        <Typography variant="h6" gutterBottom>
                            Middle name
                        </Typography> 
                        <TextField id="middlename" size="small" label="Enter your Middlename" variant="outlined" fullWidth />

                        <Typography variant="h6" gutterBottom>
                            Last name
                        </Typography> 
                        <TextField id="lastname" size="small" label="Enter your Lastname" variant="outlined" fullWidth />

                        <Typography variant="h6" gutterBottom>
                            Nickname
                        </Typography> 
                        <TextField id="nickname" size="small" label="Enter your Nickname" variant="outlined" fullWidth />

                    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}