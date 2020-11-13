import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import BuildingView from '../../components/BuildingView'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import { ISubs,IFloor } from '../../interface/Interfaces'
import Buildings from '../Buildings/buildingsData'
import { DEFAULT_TITLE, FLOORINFO } from '../../defaults/restData'
import CreateButton from '../../components/Create'

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


  const itemData: IFloor[] = FLOORINFO

    const create = {
        fields: ['Floor', 'Room Type', 'Capacity'],
        title: 'floor',
        //helperTxt: 'Fill up details',
        helperTxt: '',
    }
    
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
                        <CreateButton fields={create.fields} title={create.title} helperTxt={create.helperTxt}/>
                        <br/>
                        <BuildingView itemID={props.itemID} itemData={itemData}/>
                    </Container>
                </NavDrawer>
            )}
        </div>
    )
}