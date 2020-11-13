import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Table from './table'
import {IBuilding} from '../../interface/Interfaces'
import { BLDGS } from '../../defaults/restData'

const columns = ['Name', 'Type', 'Capacity', 'Vacancy', 'Occupancy']
const rows: IBuilding[] = BLDGS

export default function Buildings() {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Table title="Building List" columns={columns} rows={rows} />
                </Container>
            </NavDrawer>
        </div>
    )
}