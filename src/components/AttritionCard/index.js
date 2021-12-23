import React from 'react'
import { Card } from 'antd'
import { AttritionHeader } from 'components/AttritionHeader'

export const AttritionCard = ({ employeeDetails }) => {
  const { name, position, rehire_eligible, voluntary } = employeeDetails
  return (
    <>
      <Card>
        <AttritionHeader name={name} position={position} rehireEligibility={rehire_eligible} voluntary={voluntary}/>
      </Card>
    </>
  )
}
