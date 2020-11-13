import React from 'react'
import Container from '@material-ui/core/Container';
import Form from '../components/register/Form'
import NavDrawer from '../components/dashboard/NavDrawer'
import { DEFAULT_TITLE, COUNTRY, PROVINCE } from '../defaults/restData'

export default function Register() {
    return (
        <div>
            <NavDrawer title={DEFAULT_TITLE}>
                <Container>
                    <Form country={COUNTRY} province={PROVINCE}/>
                </Container>
            </NavDrawer>
        </div>
    )
}