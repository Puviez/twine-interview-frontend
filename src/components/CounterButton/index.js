import React from 'react'
import { Button } from 'antd'

import './style.css'

export const CounterButton = ({ icon, onClick }) => {
	return (
		<Button
			className="counter-button"
			shape="circle"
			size="small"
			icon={icon}
			onClick={onClick}
		></Button>
	)
}
