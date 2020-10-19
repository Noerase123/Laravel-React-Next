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

export default function Form() {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [province, setProvince] = React.useState('')
    const [city, setCity] = React.useState('')

    const handleChangeCity = (event: React.ChangeEvent<{value: unknown}>) => {
        setCity(event.target.value as string)
    }

    const handleChangeProvince = (event: React.ChangeEvent<{value: unknown}>) => {
        setProvince(event.target.value as string)
    }

    const handleChangeCountry = (event: React.ChangeEvent<{value: unknown}>) => {
        setCountry(event.target.value as string)
    }

    const handleChangeGender = (event: React.ChangeEvent<{value: unknown}>) => {
        setGender(event.target.value as string)
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

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
                            Personal Information
                        </Typography>
                        
                        <Typography variant="subtitle1" gutterBottom>
                            First name
                        </Typography>
                        <TextField id="firstname" size="small" label="Enter your Firstname" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Middle name
                        </Typography> 
                        <TextField id="middlename" size="small" label="Enter your Middlename" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Last name
                        </Typography> 
                        <TextField id="lastname" size="small" label="Enter your Lastname" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Nickname
                        </Typography> 
                        <TextField id="nickname" size="small" label="Enter your Nickname" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Phone Number
                        </Typography>
                        <TextField className={classes.phoneCode} id="phone1" size="small" placeholder="+63" variant="outlined" />
                        <TextField className={classes.phoneCode} id="phone2" size="small" placeholder="917" variant="outlined" />
                        <TextField id="phone3" size="small" placeholder="1234567" variant="outlined" />

                        <Typography variant="subtitle1" gutterBottom>
                            Landline
                        </Typography> 
                        <TextField id="landline" size="small" label="Enter your Landline" variant="outlined" />

                        <Typography variant="subtitle1" gutterBottom>
                            Birth Date
                        </Typography>
                        <TextField id="birthdate" size="small" type="date" value={Date.now()} variant="outlined" />

                        <Typography variant="subtitle1" gutterBottom>
                            Birth Place
                        </Typography> 
                        <TextField id="birthplace" size="small" label="Enter your Birthplace" variant="outlined" fullWidth />

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
                            Primary Email Address
                        </Typography> 
                        <TextField id="primaryEmail" size="small" label="Enter primary address" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Gender
                        </Typography> 
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="gender">Select Gender</InputLabel>
                            <Select
                            labelId="gender"
                            id="gender"
                            value={gender}
                            onChange={handleChangeGender}
                            >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'others'}>Others</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography variant="subtitle1" gutterBottom>
                            Country
                        </Typography> 
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="country">Philippines</InputLabel>
                            <Select
                            labelId="country"
                            id="country"
                            value={country}
                            onChange={handleChangeCountry}
                            >
                            <MenuItem value={'Philippines'}>Philippines</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography variant="subtitle1" gutterBottom>
                            Province
                        </Typography> 
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="province">Select province</InputLabel>
                            <Select
                            labelId="province"
                            id="province"
                            value={province}
                            onChange={handleChangeProvince}
                            >
                            <MenuItem value={'metro manila'}>Metro manila</MenuItem>
                            </Select>
                        </FormControl>

                        <Typography variant="subtitle1" gutterBottom>
                            City
                        </Typography> 
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="city">Select City</InputLabel>
                            <Select
                            labelId="city"
                            id="city"
                            value={city}
                            onChange={handleChangeCity}
                            >
                            <MenuItem value={'makati city'}>Makati City</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <Typography className={classes.center} variant="h6" gutterBottom>
                            Emergency Information
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            Name of contact person
                        </Typography>
                        <TextField id="emergencyName" size="small" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Number of contact person
                        </Typography> 
                        <TextField id="emergencyNum" size="small" variant="outlined" fullWidth />

                        <Typography variant="subtitle1" gutterBottom>
                            Relationship with contact person
                        </Typography> 
                        <TextField id="emergencyRelationship" size="small" variant="outlined" fullWidth />

                        <br/>
                        <br/>
                        <Button variant="contained" color="primary">
                            Next
                        </Button>

                    </div>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}