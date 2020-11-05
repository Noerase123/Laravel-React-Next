import React from 'react'
import Container from '@material-ui/core/Container';
import NavDrawer from '../components/dashboard/NavDrawer'
import HomePage from '../components/dashboard/HomePage'

export default function Dashboard() {
    return (
        <div>
            <NavDrawer title="PMS">
                <Container>
                    <HomePage/>
                </Container>
            </NavDrawer>
        </div>
    )
}