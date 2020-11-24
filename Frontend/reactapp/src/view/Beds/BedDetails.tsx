import React from 'react'
import Beds from './bedsData'

interface IProps {
  params: string
}

export default function BedDetails(props: IProps) {
  return (
    <div>
      {props.params !== null ? (
        <React.Fragment>
          <h2> Hello world! </h2>
        </React.Fragment>
      ): (
        <React.Fragment>  
          <Beds/>
        </React.Fragment>
      )}
    </div>
  )
}