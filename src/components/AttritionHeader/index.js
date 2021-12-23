import React from 'react'
import { Typography } from 'antd';

import './style.css'

const { Title } = Typography;

export const AttritionHeader = ({ name, position, rehireEligibility, voluntary}) => {
  const getVolunteerBoxStyle = () => {
    if (rehireEligibility) {
      if (voluntary) {
        return 'voluntary'
      }
      return 'involuntary'
    }
    return ''
  }

  return (
    <div className="attrition-header">
      <div className={`volunteer-status-box ${getVolunteerBoxStyle()}`}></div>
      <div className="attrition-text">
        <Title  className="remove-margin" level={5}>{`${name}, ${position}`}</Title>
      </div>
    </div>
  )
}
