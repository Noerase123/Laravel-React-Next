import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

interface IList {
    link: string
    subLink: string
}

export default function SubList(props: IList) {
    return (
        <React.Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href={props.link}>
                    <span style={{textDecoration:'none', color:'#808080'}}>Dashboard</span>
                </Link>
                <Link href={props.subLink}>
                    <span style={{textDecoration:'none', color:'#808080'}}>{props.subLink}</span>
                </Link>
                <Typography>
                    <span style={{textDecoration:'none', color:'#808080'}}>Details</span>
                </Typography>
            </Breadcrumbs>
        </React.Fragment>
    )
}