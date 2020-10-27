import React from 'react'
import Paper from '@material-ui/core/Paper'

interface IDetails {
    itemID: string
}

export default function TableDetails(props: IDetails) {
    return (
        <React.Fragment>
            <Paper>
                <h3>Details Tables from {props.itemID} </h3>
            </Paper>
        </React.Fragment>
    )
}