import React from 'react'
import Link from 'next/link'
import Axios from 'axios'

export default function Home() {
    
    const server = 'http://127.0.0.1:8000/'

    const [tenants, setTenants] = React.useState([])

    React.useEffect(() => {

        Axios.get(server + 'api/tenant')
            .then(res => {
                console.log(res.data.data)
                setTenants(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <div>
            <h2>Sample Test</h2>
            {tenants.map(tenant => (
                <div key={tenant.tenantID}>
                    <h4> Fullname : {tenant.name} </h4>
                    <h4> Tenant Type : {tenant.tenantType} </h4>
                    <h4> Unit No. : {tenant.roomNumber} </h4>
                    <h4> Bed Price : {tenant.bedPrice} </h4>
                    <h4> Move-In Date : {tenant.moveIn} </h4>
                    <h4> Move-Out Date : {tenant.moveOut} </h4>
                    <Link href="/profile"><a>See more</a></Link>
                </div>
            ))}
        </div>
    )
}