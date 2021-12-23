import React from 'react'
import { Layout } from 'antd'
import { CounterContainer } from 'components/CounterContainer'

import './style.css'

const { Sider } = Layout

export const AppSider = () => {
	return (
		<Sider>
			<div className="filler"></div>
			<CounterContainer />
		</Sider>
	)
}
