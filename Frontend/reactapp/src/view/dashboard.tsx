import React from 'react'
import Container from '@material-ui/core/Container';
import NavDrawer from '../components/dashboard/NavDrawer'
import HomePage from '../components/dashboard/HomePage'
import {DEFAULT_TITLE} from '../defaults/restData'

export default function Dashboard() {
    return (
        <div>
            <NavDrawer title={DEFAULT_TITLE}>
                <Container>
                    <HomePage/>
                </Container>
            </NavDrawer>
        </div>
    )
}