import React from 'react'
import { Button, Row, Col } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons'

import './style.css'

export const Counter = ({ id, counterName, counterValue, updateCounter }) => {
  const editCounterValue = (isIncrement) => {
    const newCounterValue = isIncrement ? counterValue + 1 : counterValue - 1
    console.log(newCounterValue)
    updateCounter({
      id,
      counterName,
      counterValue: newCounterValue
    })
  }

  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <div className="stupid">{`${counterName}: ${counterValue}`}</div>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col>
          <Button shape="circle" icon={<UpOutlined />} size="small" className="counter-button" onClick={() => editCounterValue(true)}></Button>
          <Button shape="circle" icon={<DownOutlined />} size="small" className="counter-button" onClick={() => editCounterValue(false)}></Button>
        </Col>
      </Row>
    </>
  )
}
