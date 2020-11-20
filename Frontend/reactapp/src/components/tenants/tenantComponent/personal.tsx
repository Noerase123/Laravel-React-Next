import React from 'react'
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IPersonalInfo } from '../../../interface/Interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    personalLayout: {
      float:'right', 
      marginRight:10
    }
  }),
);

interface IProps {
    person: IPersonalInfo
}

interface IModel {
    label: string
    value: string
}

export default function Personal(props: IProps) {
    const classes = useStyles();


    const {person} = props

    const obj: IModel[] = [
        {
            label: 'First name',
            value: person.firstName,
        },
        {
            label: 'Middle name',
            value: person.middleName,
        },
        {
            label: 'Last name',
            value: person.lastName,
        },
        {
            label: 'Birth Date',
            value: person.birthDate,
        },
        {
            label: 'Birth place',
            value: person.birthPlace,
        },
        {
            label: 'City',
            value: person.city,
        },
        {
            label: 'Street',
            value: person.street,
        },
        {
            label: 'Gender',
            value: person.gender,
        },
        {
            label: 'Email',
            value: person.email,
        },
        {
            label: 'Company',
            value: person.company,
        },
        {
            label: 'Salary',
            value: person.salary,
        },
        {
            label: 'Company email',
            value: person.companyEmail,
        },
        {
            label: 'Company schedule',
            value: person.companySched,
        },
        {
            label: 'Emergency name',
            value: person.emergencyName,
        },
        {
            label: 'Emergency relation',
            value: person.emergencyRelation,
        },
        {
            label: 'Emergency contact',
            value: person.emergencyContact,
        },
    ]

    return (
        <div>
            {obj.map(res => (
              <Grid container>
                <Grid item xs={3}>
                <Typography className={classes.personalLayout}> {res.label} </Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography> <b>{res.value}</b> </Typography>
                </Grid>
              </Grid>
            ))}
        </div>
    )
}