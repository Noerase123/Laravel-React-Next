import React from 'react'
import Container from '@material-ui/core/Container';
import Form from '../components/register/Form'
import NavDrawer from '../components/dashboard/NavDrawer'
import {DEFAULT_TITLE} from '../defaults/default'

export default function Register() {
    return (
        <div>
            <NavDrawer title={DEFAULT_TITLE}>
                <Container>
                    <Form/>
                </Container>
            </NavDrawer>
        </div>
    )
}