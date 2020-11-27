import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import TableInvoices from './tableInvoices'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import { ISubs,IInvoice } from '../../interface/Interfaces'
import Payments from '../Payments/payments'
import { DEFAULT_TITLE, INVOICES } from '../../defaults/restData'

interface IDetails {
    itemID: string
}

export default function PaymentDetails(props: IDetails) {

    const subs: ISubs[] = [
        {
            link: '/',
            title: 'Dashboard'
        },
        {
            link: '/billing',
            title: 'Payments'
        },
        {
            link: `/billing?buildings=${props.itemID}`,
            title: props.itemID
        }
    ]

    const columns = ['Building', 'Unit', 'Reference', 'Billing Date', 'Total Remaining', 'Status']
    const rows: IInvoice[] = INVOICES
    
    return (
        <div>
            {props.itemID === null ? (
                <Payments/>
            ) : (
                <NavDrawer title={DEFAULT_TITLE}>
                    <Container>
                        <Typography variant="h5" gutterBottom>
                            Payment Details
                        </Typography>
                        <SubList item={subs}/>
                        <br/>
                        <TableInvoices columns={columns} rows={rows} />
                    </Container>
                </NavDrawer>
            )}
        </div>
    )
}