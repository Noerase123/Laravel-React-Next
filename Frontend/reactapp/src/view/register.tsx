import React from 'react'
import Container from '@material-ui/core/Container';
import Form from '../components/register/Form'
import NavDrawer from '../components/dashboard/NavDrawer'

export default function Register() {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Form/>
                </Container>
            </NavDrawer>
        </div>
    )
}