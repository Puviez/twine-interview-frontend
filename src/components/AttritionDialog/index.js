import React, { useState } from 'react'
import { Modal, Typography, Input, Button } from 'antd'

import { AttritionHeader } from 'components/AttritionHeader'

import './style.css'

const { Text, Link } = Typography

// Abstracted to component for cleaner conditional rendering
const EmailInput = ({ name, handleInputChange, sendEmail }) => {
	return (
		<div className="email-input">
			<Input
				placeholder={`Reach out to ${name}`}
				onChange={handleInputChange}
			/>
			<div className="send-button">
				<Button shape="round" onClick={sendEmail}>
					Send Email
				</Button>
			</div>
		</div>
	)
}

export const AttritionDialog = ({
	isDialogVisible,
	closeDialog,
	name,
	position,
	rehireEligibility,
	voluntary,
	terminationReason,
	profileLink,
	email
}) => {
	const [emailContent, setEmailContent] = useState('')
	const noTerminationReasonString = 'No recorded termination reason'

	const handleInputChange = (e) => {
		setEmailContent(e.target.value)
	}

	const sendEmail = () => {
		// Simulate sending email
		console.log('Sending... ', `${emailContent}`, `Sent to ${email}`)
		closeDialog()
	}

	return (
		<Modal
			visible={isDialogVisible}
			destroyOnClose={true}
			onCancel={closeDialog}
			closable={false}
			footer={null}
		>
			<AttritionHeader
				name={name}
				position={position}
				rehireEligibility={rehireEligibility}
				voluntary={voluntary}
			/>
			<div className="profile-link">
				<Text>
					Go to&nbsp;<Link href={profileLink}>{`${name}'s Profile`}</Link>
				</Text>
			</div>
			<Text italic={!terminationReason} strong={!!terminationReason}>
				{terminationReason ? terminationReason : noTerminationReasonString}
			</Text>
			{voluntary && rehireEligibility && (
				<EmailInput
					name={name}
					handleInputChange={handleInputChange}
					sendEmail={sendEmail}
				/>
			)}
		</Modal>
	)
}
