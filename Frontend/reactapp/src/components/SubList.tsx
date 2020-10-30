import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

interface IList {
    link: string
    item: string
}

export default function SubList(props: IList) {
    return (
        <React.Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/">
                    <span style={{textDecoration:'none', color:'#808080'}}>dashboard</span>
                </Link>
                <Link href={`/${props.link}`}>
                    <span style={{textDecoration:'none', color:'#808080'}}>{props.link}</span>
                </Link>
                <Typography>
                    <span style={{textDecoration:'none', color:'#808080'}}>{props.item}</span>
                </Typography>
            </Breadcrumbs>
        </React.Fragment>
    )
}