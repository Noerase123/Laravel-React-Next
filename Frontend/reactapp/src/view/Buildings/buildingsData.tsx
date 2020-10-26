import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Table from './table'
import {IBuilding} from '../../interface/Interfaces'

const columns = ['Name', 'Type', 'Capacity', 'Vacancy', 'Occupancy']

const rows: IBuilding[] = [
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Sydney',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Auckland',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Tokyo',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Seoul',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
    {
        name: 'Amsterdam',
        type: 'First Class',
        capacity: 100,
        vacancy: 30,
        occupancy: 70
    },
]

export default function Buildings() {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Table title="MyTown Buildings" columns={columns} rows={rows} />
                </Container>
            </NavDrawer>
        </div>
    )
}