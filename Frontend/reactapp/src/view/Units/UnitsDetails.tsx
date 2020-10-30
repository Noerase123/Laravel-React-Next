import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import UnitView from '../../components/UnitView'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'

interface IDetails {
    itemID: string
}

export default function UnitsDetails(props: IDetails) {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Room Information
                    </Typography>
                    <SubList link={'units'} item={props.itemID}/>
                    <br/>
                    <br/>
                    <UnitView itemID={props.itemID}/>
                </Container>
            </NavDrawer>
        </div>
    )
}