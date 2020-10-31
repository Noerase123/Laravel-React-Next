import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import UnitView from '../../components/UnitView'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import { ITenant, ISubs } from '../../interface/Interfaces'
import Unit from './UnitsData'

interface IDetails {
    id: string
    building: string
    unit: string
}

export default function UnitsDetails(props: IDetails) {

    const tenants: ITenant[] = [
        {
            name: 'John Isaac',
            email: 'noerase12@gmail.com',
            contactNum: '09770466342',
            company: 'PULS',
            occupation: 'Software Engineer',
            province: 'Laguna',
            city: 'Calamba',
            houseNum: '#123 st',
            bed: 'A',
            tenantType: 'Individual',
            rentalRate: '4,100',
            moveIn: 'January 15, 2020',
            moveOut: 'January 14, 2021'
        },
        {
            name: 'John Pedro',
            email: 'noerase12@gmail.com',
            contactNum: '09770466342',
            company: 'PULS',
            occupation: 'Software Engineer',
            province: 'Laguna',
            city: 'Calamba',
            houseNum: '#123 st',
            bed: 'B',
            tenantType: 'Individual',
            rentalRate: '4,100',
            moveIn: 'January 15, 2020',
            moveOut: 'January 14, 2021'
        },
        {
            name: 'John Patrick',
            email: 'noerase12@gmail.com',
            contactNum: '09770466342',
            company: 'PULS',
            occupation: 'Software Engineer',
            province: 'Laguna',
            city: 'Calamba',
            houseNum: '#123 st',
            bed: 'C',
            tenantType: 'Individual',
            rentalRate: '4,100',
            moveIn: 'January 15, 2020',
            moveOut: 'January 14, 2021'
        },
        {
            name: 'John Andrew',
            email: 'noerase12@gmail.com',
            contactNum: '09770466342',
            company: 'PULS',
            occupation: 'Software Engineer',
            province: 'Laguna',
            city: 'Calamba',
            houseNum: '#123 st',
            bed: 'D',
            tenantType: 'Individual',
            rentalRate: '4,100',
            moveIn: 'January 15, 2020',
            moveOut: 'January 14, 2021'
        }
    ]

    const subs: ISubs[] = [
        {
            link: '/',
            title: 'Dashboard'
        },
        {
            link: '/units',
            title: 'Units'
        },
        {
            link: `/buildings?details=${props.building}`,
            title: props.building
        },
        {
            link: '',
            title: props.unit
        }
    ]

    return (
        <div>
            {props.id === null ? (
                <Unit/>
            ): (
                <NavDrawer title="MyTown">
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Room Information
                    </Typography>
                    <SubList item={subs}/>
                    <br/>
                    <br/>
                    <UnitView tenantData={tenants}/>
                </Container>
            </NavDrawer>
            )}
        </div>
    )
}