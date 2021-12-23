import React, { useState } from 'react'
import { Card } from 'antd'
import { AttritionHeader } from 'components/AttritionHeader'
import { AttritionDialog } from 'components/AttritionDialog'

export const AttritionCard = ({ employeeDetails }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const { name, position, rehire_eligible, voluntary, termination_reason, profile_link, email } = employeeDetails

  const openDialog = () => {
    setIsDialogVisible(true)
  }

  const closeDialog = () => {
    setIsDialogVisible(false)
  }

  return (
    <>
      <Card onClick={() => {openDialog()}}>
        <AttritionHeader name={name} position={position} rehireEligibility={rehire_eligible} voluntary={voluntary}/>
      </Card>
      <AttritionDialog isDialogVisible={isDialogVisible} closeDialog={closeDialog} name={name} position={position} rehireEligibility={rehire_eligible} voluntary={voluntary} terminationReason={termination_reason} profileLink={profile_link} email={email}/>
    </>
  )
}
