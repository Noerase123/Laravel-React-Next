import React from 'react'
import Link from 'next/link'
import Axios from 'axios'

export default function Bio() {
    
    const apiUrl = 'http://127.0.0.1:8000/api/'

    const [pro, setPro] = React.useState({})
    const [basic, setBasic] = React.useState({})

    React.useEffect(() => {

        Axios.get(apiUrl+'tenant/full/1')
            .then(res => {
                setPro(res.data)
                setBasic(res.data.basicInfo)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, {})

    return (
        <div>
            <h2>Tenant Details</h2>
            ID: {pro.tenantID} <br/>
            Fullname: {pro.fullname} <br/>
            Gender: {basic.gender} <br/>

        </div>
    )
}