import React from 'react'
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import {BLDGPAYMENT, DEFAULT_TITLE} from '../../defaults/restData'
import Table from './table'
import {IPayment} from '../../interface/Interfaces'

export default function Payments() {
    
    const columns = ['Building Name', 'Building Type', 'Invoices', 'Payments', 'Latest Date']
    const rows: IPayment[] = BLDGPAYMENT
    return (
        <div>
            <NavDrawer title={DEFAULT_TITLE}>
                <Container>
                    <Table title="Payments List" columns={columns} rows={rows} />
                </Container>
            </NavDrawer>
        </div>
    )
}