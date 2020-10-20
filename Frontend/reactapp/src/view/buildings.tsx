import React from 'react';
import Container from '@material-ui/core/Container'
import NavDrawer from '../components/dashboard/NavDrawer'
import Table from '../components/table'
import Buttons from '../components/Buttons'
import Typography from '@material-ui/core/Typography'

export default function Buildings() {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Typography variant="h5" gutterBottom>
                        MyTown Buildings
                    </Typography>
                    <br/>
                    <Buttons/>
                    <br/>
                    <Table/>
                </Container>
            </NavDrawer>
        </div>
    )
}