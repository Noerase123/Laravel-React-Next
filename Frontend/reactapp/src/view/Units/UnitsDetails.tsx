import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import UnitView from '../../components/UnitView'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import {TENANTPERROOM} from '../../defaults/default'
import { ITenant, ISubs } from '../../interface/Interfaces'
import Unit from './UnitsData'
import {DEFAULT_TITLE} from '../../defaults/default'

interface IDetails {
    id: string
    building: string
    unit: string
}

export default function UnitsDetails(props: IDetails) {

    const tenants: ITenant[] = TENANTPERROOM

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
                <NavDrawer title={DEFAULT_TITLE}>
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