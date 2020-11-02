import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Table from './table'
import {ROOMS} from '../../defaults/default'
import { IRoom } from '../../interface/Interfaces'

const columns = [
  'Building',
  'Unit Number',
  'Unit Type',
  'Percentage Capacity'
]

const rows: IRoom[] = ROOMS

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