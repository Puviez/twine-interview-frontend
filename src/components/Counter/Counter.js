import React from 'react'
import { Row, Col } from 'antd';
import { UpOutlined, DownOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'

import './style.css'
import { CounterButton } from 'components/CounterButton';

export const Counter = ({ id, counterName, counterValue, updateCounter, removeCounter }) => {
  const editCounterValue = (isIncrement) => {
    const newCounterValue = isIncrement ? counterValue + 1 : counterValue - 1
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
              <CounterButton icon={<UpOutlined />} onClick={() => editCounterValue(true)} />
              <CounterButton icon={<DownOutlined />} onClick={() => editCounterValue(false)} />
            </Col>
          </Row>
        </Col>
        <Col>
            <Row>
              <CounterButton icon={<DeleteOutlined />} onClick={() => removeCounter(id)} />
            </Row>
            <Row>
              <CounterButton icon={<EditOutlined />} size="small" onClick={() => removeCounter()} />
            </Row>
          </Col>
      </Row>
    </>
  )
}
