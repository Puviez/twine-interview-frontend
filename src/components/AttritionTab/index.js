import React, { useState, useEffect } from 'react'
import { Spin } from 'antd';
import * as GeneralHelper from 'helper/GeneralHelper'

import './style.css'

export const AttritionTab = ({ rehireEligible }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [timeline, setTimeline] = useState({})

  useEffect(() => {
      // Fetch Employees when component is mounted
      fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    // Show loading state in UI
    setIsLoading(true)
    // Simulate api call
    await apiSimulation()
    // Simulate api response (For simplicity I'm not including error handling and assuming the response comes through properly)
    let employeesList
    if (rehireEligible === 'true') {
      employeesList = GeneralHelper.rehireEligibleEmployees
    } else if (rehireEligible === 'false') {
      employeesList = GeneralHelper.rehireInellgibleEmployees
    } else {
      employeesList = GeneralHelper.rehireUnknownEmployees
    }
    // Generate the timeline using the returned list of employees
    generateTimeline(employeesList)
    // Remove loading state and display results
    setIsLoading(false)
  }

  // Dummy function to simulate api call
  const apiSimulation = () => {
    return new Promise(resolve => setTimeout(resolve, 3000))
  }

  const generateTimeline = (employeesList) => {
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
        {isLoading && 
          <div className="progress-container">
            <Spin />
          </div>
        }
        {Object.keys(timeline).map((date) => {
          return (
            <div>
              <p>{date}</p>
              {timeline[date].map((employee) => {
                return (
                  <div>{employee.name}</div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}