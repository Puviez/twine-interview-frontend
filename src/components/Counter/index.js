import React from 'react'
import { Row, Col, Modal } from 'antd'
import { UpOutlined, DownOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import { CounterButton } from 'components/CounterButton'
import { EditCounterNameDialog } from 'components/EditCounterNameDialog'

import './style.css'

const { confirm } = Modal;

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

	const showDeleteConfirm = (idToDelete) => {
		confirm({
			title: "Are you sure you want to delete your counter?",
			icon: <ExclamationCircleOutlined />,
			content: "Your counter will be permanently deleted.",
			onOk() {
				removeCounter(idToDelete)
			}
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
							onClick={() => showDeleteConfirm(id)}
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
