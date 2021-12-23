import React from 'react'
import { Row, Col } from 'antd'
import { UpOutlined, DownOutlined, DeleteOutlined } from '@ant-design/icons'
import { CounterButton } from 'components/CounterButton'
import { EditCounterNameDialog } from 'components/EditCounterNameDialog'
import './style.css'

export const Counter = ({
	id,
	counterName,
	counterValue,
	updateCounter,
	removeCounter
}) => {
	const editCounterValue = (isIncrement) => {
		const newCounterValue = isIncrement ? counterValue + 1 : counterValue - 1
		updateCounter({
			id,
			counterName,
			counterValue: newCounterValue
		})
	}

	const editCounterName = (newCounterName) => {
		updateCounter({
			id,
			counterName: newCounterName,
			counterValue
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
							<CounterButton
								icon={<UpOutlined />}
								onClick={() => editCounterValue(true)}
							/>
							<CounterButton
								icon={<DownOutlined />}
								onClick={() => editCounterValue(false)}
							/>
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<CounterButton
							icon={<DeleteOutlined />}
							onClick={() => removeCounter(id)}
						/>
					</Row>
					<Row>
						<EditCounterNameDialog
							counterName={counterName}
							editCounterName={editCounterName}
						/>
					</Row>
				</Col>
			</Row>
		</>
	)
}
