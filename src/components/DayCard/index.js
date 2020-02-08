import React from 'react'
import './styles.scss'
import { SpendingsDate } from '../SpendingsDate'
import { NewSpending } from '../NewSpending'
import { SpendingsList } from '../SpendingsList'

export const DayCard = ({ spendingsList, actions }) => {
  return (
    <div className="day-card">
      <div className="day-card__header">
        <SpendingsDate />
        <NewSpending addSpending={actions.addSpending} />
      </div>
      <SpendingsList spendingsList={spendingsList} />
    </div>
  )
}
