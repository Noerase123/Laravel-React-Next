import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../components/dashboard/NavDrawer'
import Table from '../components/table'

export default function Buildings() {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Table/>
                </Container>
            </NavDrawer>
        </div>
    )
}