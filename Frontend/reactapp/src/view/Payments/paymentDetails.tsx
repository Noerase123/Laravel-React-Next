import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import BuildingView from '../../components/BuildingView'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import { ISubs,IFloor } from '../../interface/Interfaces'
import Payments from '../Payments/payments'
import { DEFAULT_TITLE, FLOORINFO } from '../../defaults/restData'
import CreateButton from '../../components/Create'

interface IDetails {
    itemID: string
}

export default function PaymentDetails(props: IDetails) {

    const subs: ISubs[] = [
        {
            link: '/',
            title: 'Dashboard'
        },
        {
            link: '/billing',
            title: 'Payments'
        },
        {
            link: `/billing?buildings=${props.itemID}`,
            title: props.itemID
        }
    ]


  const itemData: IFloor[] = FLOORINFO

    const create = {
        fields: ['Floor'],
        title: 'floor',
        //helperTxt: 'Fill up details',
        helperTxt: '',
    }
    
    return (
        <div>
            {props.itemID === null ? (
                <Payments/>
            ) : (
                <NavDrawer title={DEFAULT_TITLE}>
                    <Container>
                        <Typography variant="h5" gutterBottom>
                            Payment Details
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