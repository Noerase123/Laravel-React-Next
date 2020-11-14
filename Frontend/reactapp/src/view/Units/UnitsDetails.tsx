import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import UnitView from '../../components/UnitView'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SubList from '../../components/SubList'
import { TENANTPERROOM } from '../../defaults/restData'
import ActivityLogs from '../../components/tenants/ActivityLogs'
import { ITenant, ISubs, IDataLog } from '../../interface/Interfaces'
import Unit from './UnitsData'
import {DEFAULT_TITLE, DATALOGS} from '../../defaults/restData'

interface IDetails {
    id: string
    building: string
    unit: string
}

export default function UnitsDetails(props: IDetails) {

    const tenants: ITenant[] = TENANTPERROOM
    const dataLogs: IDataLog[] = DATALOGS

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
                <Grid container xs={12}>
                    <Grid item xs={9}>
                        <Container>
                            <Typography variant="h5" gutterBottom>
                                Room Information 
                            </Typography>
                            <SubList item={subs}/>
                            <br/>
                            <UnitView tenantData={tenants} dataLogs={dataLogs}/>
                        </Container>
                    </Grid>
                    <Grid item xs={3}>
                        <Container>
                            <Typography variant="h5" gutterBottom>
                                Unit Activities
                            </Typography>
                            <br/>
                            <ActivityLogs dataLog={dataLogs}/>
                        </Container>
                    </Grid>
                </Grid>
            </NavDrawer>
            )}
        </div>
    )
}