import React from 'react'
import './styles.scss'
import { SpendingsDate } from '../SpendingsDate'
import { NewSpend } from '../NewSpend'
import { SpendingsList } from '../SpendingsList'
import { spendings } from '../../mockdata/spendings'

export const DayCard = () => {
  return (
    <div className="day-card">
      <div className="day-card__header">
        <SpendingsDate />
        <NewSpend />
      </div>
      <SpendingsList spendingsList={spendings} />
    </div>
  )
}
