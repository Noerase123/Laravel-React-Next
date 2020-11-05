import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import BuildingView from '../../components/BuildingView'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import { ISubs } from '../../interface/Interfaces'
import Buildings from '../Buildings/buildingsData'
import {DEFAULT_TITLE} from '../../defaults/default'


interface IDetails {
    itemID: string
}

export default function BuildingsDetails(props: IDetails) {

    const subs: ISubs[] = [
        {
            link: '/',
            title: 'Dashboard'
        },
        {
            link: '/buildings',
            title: 'Buildings'
        },
        {
            link: `/buildings?details=${props.itemID}`,
            title: props.itemID
        }
    ]
    
    return (
        <div>
            {props.itemID === null ? (
                <Buildings/>
            ) : (
                <NavDrawer title={DEFAULT_TITLE}>
                    <Container>
                        <Typography variant="h5" gutterBottom>
                            Building Details
                        </Typography>
                        <SubList item={subs}/>
                        <br/>
                        <br/>
                        <BuildingView itemID={props.itemID}/>
                    </Container>
                </NavDrawer>
            )}
        </div>
    )
}