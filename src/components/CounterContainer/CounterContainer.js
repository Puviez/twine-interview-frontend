import React, { useState } from 'react'
import * as GeneralHelper from '../../helper/GeneralHelper'

import { CounterContext } from 'context/CounterContext'

import { Counter } from 'components/Counter/Counter'

export const CounterContainer = () => {
  const [counters, setCounters] = useState(() => JSON.parse(window.localStorage.getItem('counters')) || [{id: 'test', counterName:'Test Name', counterValue:3}])

  const updateCounter = (updatedCounter) => {
    const countersCopy = [...counters]
    const index = countersCopy.findIndex(counter => counter.id === updatedCounter.id)
    countersCopy.splice(index, 1, updatedCounter)
    setCounters(countersCopy)
    GeneralHelper.setLocalStorage('counters', countersCopy)
  }

  return (
    <div>
      <CounterContext.Provider value={{counters, setCounters}}>
        {counters.map((counter) => {
          return <Counter key={counter.id} id={counter.id} counterName={counter.counterName} counterValue={counter.counterValue} updateCounter={updateCounter}/>
        })}
      </CounterContext.Provider>
    </div>
  )
}
