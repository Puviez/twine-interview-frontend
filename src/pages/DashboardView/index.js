import React from 'react'
import { Typography } from 'antd'
import { AttritionTimeline } from 'components/AttritionTimeline'

const { Title } = Typography

const DashboardView = () => {
	return (
		<div>
			<Title level={1}>DASHBOARD</Title>
			<AttritionTimeline />
		</div>
	)
}

export default DashboardView
