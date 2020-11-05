import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Table from './table'
import {ROOMS, DEFAULT_TITLE} from '../../defaults/default'
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
      <NavDrawer title={DEFAULT_TITLE}>
        <Container>
          <Table title="Room List" columns={columns} rows={rows} />
        </Container>
      </NavDrawer>
    </div>
  )
}