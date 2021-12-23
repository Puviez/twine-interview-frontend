import React, { useState, useEffect } from 'react'
import { Spin, Typography } from 'antd'

import { AttritionCard } from 'components/AttritionCard'

import * as GeneralHelper from 'helper/GeneralHelper'
import './style.css'

const { Title } = Typography

export const AttritionTab = ({ rehireEligible }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [timeline, setTimeline] = useState({})

	useEffect(() => {
    let isMounted = true

		const fetchEmployees = async () => {
			// Show loading state in UI
			setIsLoading(true)
			// Simulate api call
			const employeesList = await apiSimulation(rehireEligible)
			// Generate the timeline using the returned list of employees only when component is mounted
			if (isMounted) {
        generateTimeline(employeesList)
        // Remove loading state and display results
        setIsLoading(false)
      }
		}
		// Fetch Employees
    fetchEmployees()

    return () => {
      isMounted = false
    }
	}, [rehireEligible])

	// Dummy function to simulate api call
	const apiSimulation = (queryParam) => {
		// Simulate api response (For simplicity I'm not including error handling and assuming the response comes through properly)
		let employeesList
		if (queryParam === 'true') {
			employeesList = GeneralHelper.rehireEligibleEmployees
		} else if (queryParam === 'false') {
			employeesList = GeneralHelper.rehireInellgibleEmployees
		} else {
			employeesList = GeneralHelper.rehireUnknownEmployees
		}
    // Time delay to simulate fetch/axios call
		return new Promise((resolve) =>
			setTimeout(() => {
				resolve(employeesList)
			}, 3000)
		)
	}

	const generateTimeline = (employeesList) => {
    /* 
    Storing the list of employees as an object allows us to 
    create the timline by first looping through the keys (dates)
    and then the values of each key (array of employees 
    terminated on that date.)
    */
		const timelineObj = {}
		for (const employee of employeesList) {
			// I am assuming that the list of employees is sorted by date (by the api)
			if (employee.terminated_date in timelineObj) {
				timelineObj[employee.terminated_date].push(employee)
			} else {
				timelineObj[employee.terminated_date] = [employee]
			}
		}
		setTimeline(timelineObj)
	}

	return (
		<>
			<div className="attrition-tab">
				{isLoading && (
					<div className="progress-container">
						<Spin />
					</div>
				)}
				{Object.keys(timeline).map((date) => {
					return (
						<div key={date}>
							<Title className="attrition-date" level={4}>
								{date}
							</Title>
							{timeline[date].map((employee) => {
								return (
									<AttritionCard employeeDetails={employee} key={employee.id} />
								)
							})}
						</div>
					)
				})}
			</div>
		</>
	)
}
