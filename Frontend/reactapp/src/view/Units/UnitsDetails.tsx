import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import UnitView from '../../components/UnitView'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SubList from '../../components/SubList'
import { BILLINGINVOICE, EXTRAFEE, TENANTPERROOM } from '../../defaults/restData'
import ActivityLogs from '../../components/tenants/ActivityLogs'
import ReservedTenant from '../../components/tenants/Reserved'
import { ITenant, ISubs, IDataLog, IReserved, IBillingInfo, IExtraInfo, IPersonalInfo } from '../../interface/Interfaces'
import Unit from './UnitsData'
import {DEFAULT_TITLE, DATALOGS, RESERVED, TENANTPERSONALINFO} from '../../defaults/restData'

interface IDetails {
    id: string
    building: string
    unit: string
}

export default function UnitsDetails(props: IDetails) {

    const tenants: ITenant[] = TENANTPERROOM
    const dataLogs: IDataLog[] = DATALOGS
    const reserved: IReserved[] = RESERVED
    const personalInfo: IPersonalInfo = TENANTPERSONALINFO
    const billingInfo: IBillingInfo[] = BILLINGINVOICE
    const extrafeeInfo: IExtraInfo[] = EXTRAFEE

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
                            <UnitView 
                                tenantData={tenants}
                                personalInfo={personalInfo}
                                billingInfo={billingInfo}
                                extraFeeInfo={extrafeeInfo}
                            />
                        </Container>
                    </Grid>
                    <Grid item xs={3}>
                        <Container>
                            <Typography variant="h5" gutterBottom>
                                Unit Activities
                            </Typography>
                            <br/>
                            <ActivityLogs dataLog={dataLogs}/>
                            <br/><br/>
                            <Typography variant="h5" gutterBottom>
                                Reserved Bed Move-in
                            </Typography>
                            <br/>
                            <ReservedTenant reserved={reserved}/>
                        </Container>
                    </Grid>
                </Grid>
            </NavDrawer>
            )}
        </div>
    )
}