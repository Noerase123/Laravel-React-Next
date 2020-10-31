import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from 'next/link'
import {ISubs} from '../interface/Interfaces'


interface IList {
    item : ISubs[]
}

export default function SubList(props: IList) {
    return (
        <React.Fragment>
            <Breadcrumbs aria-label="breadcrumb">
                {props.item.map(res => (
                    <Link href={res.link}>
                        <span style={{textDecoration:'none', color:'#808080'}}>{res.title}</span>
                    </Link>
                ))}
            </Breadcrumbs>
        </React.Fragment>
    )
}