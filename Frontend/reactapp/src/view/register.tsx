import React from 'react'
import Container from '@material-ui/core/Container';
import Form from '../components/register/Form'
import Form2 from '../components/register/Form2'
import NavDrawer from '../components/dashboard/NavDrawer'
import { DEFAULT_TITLE, COUNTRY, PROVINCE } from '../defaults/restData'

export default function Register() {

    var params:string = ''

    try {
        if (window !== undefined) {
            const urlParams = new URLSearchParams(window.location.search);
            params = urlParams.get('page') as string;
        } else {
            params = ''
        }
    } catch (e) {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }

    return (
        <div>
            {params === '2' ? (
            <NavDrawer title={DEFAULT_TITLE}>
                <Container>
                    <Form2/>
                </Container>
            </NavDrawer>
            ): (
            <NavDrawer title={DEFAULT_TITLE}>
                <Container>
                    <Form country={COUNTRY} province={PROVINCE}/>
                </Container>
            </NavDrawer>
            )}
        </div>
    )
}