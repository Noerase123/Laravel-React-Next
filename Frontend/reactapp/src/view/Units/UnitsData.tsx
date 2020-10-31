import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Table from './table'
import { IRoom } from '../../interface/Interfaces'

const columns = [
  'Building',
  'Unit Number',
  'Unit Type',
  'Percentage Capacity'
]

const rows: IRoom[] = [
  {
    id: 11,
    bldg: 'Amsterdam',
    number: 101,
    type: '2',
    percentageCapacity:'35%'
  },
  {
    id: 12,
    bldg: 'New York',
    number: 102,
    type: '2',
    percentageCapacity:'35%'
  },
  {
    id: 13,
    bldg: 'Amsterdam',
    number: 103,
    type: '2',
    percentageCapacity:'35%'
  },
  {
    id: 14,
    bldg: 'Amsterdam',
    number: 104,
    type: '2',
    percentageCapacity:'35%'
  },
  {
    id: 15,
    bldg: 'Amsterdam',
    number: 105,
    type: '2',
    percentageCapacity:'35%'
  },
  {
    id: 16,
    bldg: 'Amsterdam',
    number: 106,
    type: '2',
    percentageCapacity:'35%'
  },
]

export default function Units() {
  return (
    <div>
      <NavDrawer title="MyTown">
        <Container>
          <Table title="MyTown Rooms" columns={columns} rows={rows} />
        </Container>
      </NavDrawer>
    </div>
  )
}