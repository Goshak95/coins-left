import React from 'react'
import './styles.scss'
import { SpendingsDate } from '../SpendingsDate'
import { NewSpend } from '../NewSpend'
import { SpendingsList } from '../SpendingsList'

export const DayCard = ({ spendingsList }) => {
  return (
    <div className="day-card">
      <div className="day-card__header">
        <SpendingsDate />
        <NewSpend />
      </div>
      <SpendingsList spendingsList={spendingsList} />
    </div>
  )
}
