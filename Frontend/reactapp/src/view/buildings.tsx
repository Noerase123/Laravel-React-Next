import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../components/dashboard/NavDrawer'
import Table from '../components/table'
import {IBuilding, IColumn} from '../interface/Interfaces'

const columns: IColumn[] = [
    {
        id: 1,
        label: 'Name'
    },
    {
        id: 2,
        label: 'Type'
    },
    {
        id: 3,
        label: 'Capacity'
    },
    {
        id: 4,
        label: 'Vacancy'
    },
    {
        id: 5,
        label: 'Occupancy'
    },
];
const rows: IBuilding[] = [
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