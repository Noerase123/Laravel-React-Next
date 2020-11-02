import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Table from './table'
import {IBeds} from '../../interface/Interfaces'
import { TENANTS } from '../../defaults/default'


const columns = ['Name', 'Building', 'Unit', 'Letter', 'Move In', 'Move Out']
const rows: IBeds[] = TENANTS

export default function Beds() {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Table title="MyTown Beds" columns={columns} rows={rows} />
                </Container>
            </NavDrawer>
        </div>
    )
}