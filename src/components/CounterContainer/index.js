import React, { useState } from 'react'
import { Button, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import * as GeneralHelper from '../../helper/GeneralHelper'

import { CounterContext } from 'context/CounterContext'

import { Counter } from 'components/Counter'

import './style.css'

export const CounterContainer = () => {
	const [counters, setCounters] = useState(
		() =>
			JSON.parse(window.localStorage.getItem('counters')) || [
				{ id: 'test', counterName: 'Test Name', counterValue: 3 }
			]
	)

	const addCounter = () => {
		const newCounter = {
			id: GeneralHelper.generateId(8),
			counterName: 'New Counter',
			counterValue: 0
		}
		const newCountersArray = [...counters, newCounter]
		setCounters(newCountersArray)
		GeneralHelper.setLocalStorage('counters', newCountersArray)
	}

	const updateCounter = (updatedCounter) => {
		const countersCopy = [...counters]
		const index = countersCopy.findIndex(
			(counter) => counter.id === updatedCounter.id
		)
		countersCopy.splice(index, 1, updatedCounter)
		setCounters(countersCopy)
		GeneralHelper.setLocalStorage('counters', countersCopy)
	}

	// I considered combining the update and remove counter functions into a single one, but I think keeping separate functions for each task is better for maintainabillity and readability
	const removeCounter = (id) => {
		const countersCopy = [...counters]
		const index = countersCopy.findIndex((counter) => counter.id === id)
		countersCopy.splice(index, 1)
		setCounters(countersCopy)
		GeneralHelper.setLocalStorage('counters', countersCopy)
	}

	return (
		<div>
			<CounterContext.Provider value={{ counters, setCounters }}>
				{counters.map((counter) => {
					return (
						<Counter
							key={counter.id}
							id={counter.id}
							counterName={counter.counterName}
							counterValue={counter.counterValue}
							updateCounter={updateCounter}
							removeCounter={removeCounter}
						/>
					)
				})}
			</CounterContext.Provider>
			<Row justify="center" align="middle">
				<Col>
					<Button
						className="add-counter-button"
						icon={<PlusOutlined />}
						onClick={() => addCounter()}
					>
						Add Counter
					</Button>
				</Col>
			</Row>
		</div>
	)
}
