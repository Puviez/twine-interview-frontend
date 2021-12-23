import React from 'react'
import { Button, Row, Col } from 'antd';
import { UpOutlined, DownOutlined, DeleteOutlined } from '@ant-design/icons'

import './style.css'

export const Counter = ({ id, counterName, counterValue, updateCounter, removeCounter }) => {
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
          <Row justify="center" align="middle">
            <Col>
              <div className="counter-name">{`${counterName}: ${counterValue}`}</div>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col>
              <Button className="counter-button" shape="circle" icon={<UpOutlined />} size="small" onClick={() => editCounterValue(true)}></Button>
              <Button className="counter-button" shape="circle" icon={<DownOutlined />} size="small" onClick={() => editCounterValue(false)}></Button>
            </Col>
          </Row>
        </Col>
        <Col>
            <Row>
              <Button className="counter-button" shape="circle" icon={<DeleteOutlined />} size="small" onClick={() => removeCounter()}></Button>
            </Row>
            <Row>
              <Button className="counter-button" shape="circle" icon={<DeleteOutlined />} size="small" onClick={() => removeCounter()}></Button>
            </Row>
          </Col>
      </Row>
    </>
  )
}
