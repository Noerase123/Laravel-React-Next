import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useRouter} from 'next/router';
import { IBuilding } from '../../interface/Interfaces';
import { BLDGS } from '../../defaults/restData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    center: {
        textAlign: 'center'
    },
    margins: {
        marginLeft: 50,
        marginRight: 150
    },
    phoneCode: {
        width: 70
    },
    submit: {
        float: 'right'
    },
    formControl: {
        marginBottom: 10
    }
  }),
);

export default function Form2() {
    const classes = useStyles();
    const router = useRouter()

    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
  
    const bldgs:IBuilding[] = BLDGS

    const back = () => {

      confirm('Going back will not save your details')
      router.push('/register?page=1')
    }
  
    const next = () => {

        router.push('/buildings')
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Typography variant="h4" gutterBottom>
                        Tenant Registration
                    </Typography>
                    <Divider/>
                    <br/>
                    <div className={classes.margins}>
                        <Typography className={classes.center} variant="h6" gutterBottom>
                            Rent Information
                        </Typography>
                        
                        <Typography variant="subtitle1" gutterBottom>
                            Tenant Type
                        </Typography>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="tenantType">Select Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            >
                            <MenuItem value={'Student'}>Student</MenuItem>
                            <MenuItem value={'Employee'}>Employee</MenuItem>
                            <MenuItem value={'N/A'}>N/A</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography variant="subtitle1" gutterBottom>
                            Building
                        </Typography>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="tenantType">Select Building</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            >
                            {bldgs.map(bldg => (  
                              <MenuItem value={bldg.name}>{bldg.name}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>

                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" onClick={() => back()}>
                          Back
                        </Button>
                
                        <Button variant="contained" style={{float:'right'}} color="primary" onClick={() => next()}>
                          Next
                        </Button>

                    </div>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}