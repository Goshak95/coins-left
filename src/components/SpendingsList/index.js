import React from 'react'
import './styles.scss'

export const SpendingsList = props => {
  const renderList = () => {
    const spendings = props.spendingsList

    return spendings.map(item => {
      return (
        <div class="spendings-list__item">
          <h1>Item!</h1>
        </div>
      )
    })
  }

  return <div className="spendings-list">{renderList()}</div>
}
