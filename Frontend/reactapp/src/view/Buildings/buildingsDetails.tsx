import React from "react";
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import TableDetails from '../../components/TableDetails'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'

interface IDetails {
    itemID: string
}

export default function BuildingsDetails(props: IDetails) {
    return (
        <div>
            <NavDrawer title="MyTown">
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Building Details
                    </Typography>
                    <SubList link={'/'} subLink={'/buildings'}/>
                    <br/>
                    <br/>
                    <TableDetails itemID={props.itemID}/>
                </Container>
            </NavDrawer>
        </div>
    )
}