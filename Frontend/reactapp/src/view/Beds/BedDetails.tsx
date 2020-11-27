import React from 'react'
import Beds from './bedsData'
import Container from '@material-ui/core/Container'
import NavDrawer from '../../components/dashboard/NavDrawer'
import Typography from '@material-ui/core/Typography'
import SubList from '../../components/SubList'
import { IPersonalInfo, ISubs, IBeds } from '../../interface/Interfaces'
import {DEFAULT_TITLE, TENANTPERSONALINFO, TENANTS} from '../../defaults/restData'
import TenantBed from '../../components/bed/TenantBed'

interface IProps {
  params: string
}

export default function BedDetails(props: IProps) {

  const personInfo: IPersonalInfo = TENANTPERSONALINFO
  const bedInfo: IBeds = TENANTS

  const subs: ISubs[] = [
    {
        link: '/',
        title: 'Dashboard'
    },
    {
        link: '/beds',
        title: 'Beds'
    },
    {
        link: `/beds?details=${props.params}`,
        title: props.params !== null ? props.params.split('-').join(' ') : ''
    }
  ]
  
  return (
    <div>
      {props.params !== null ? (
        <React.Fragment>
          <NavDrawer title={DEFAULT_TITLE}>
              <Container>
                  <Typography variant="h5" gutterBottom>
                      Tenant Information
                  </Typography>
                  <SubList item={subs}/>
                  <br/>
                  <TenantBed personInfo={personInfo} bedInfo={bedInfo}/>
              </Container>
          </NavDrawer>
        </React.Fragment>
      ): (
        <React.Fragment>  
          <Beds/>
        </React.Fragment>
      )}
    </div>
  )
}