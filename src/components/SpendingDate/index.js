import React from 'react'
import './styles.scss'

export const SpendingDate = props => {
  let date = new Date()
  return (
    <div className="date">
      <h1>Today</h1>
      <p>{date.toLocaleString('en-US')}</p>
    </div>
  )
}
