import React from 'react'
import './styles.scss'
import { SpendingsItem } from '../SpendingsItem'

export const SpendingsList = ({
  size = 'large',
  spendingsList = [],
  deleteSpending,
  editSpending,
}) => {
  const renderList = () => {
    const spendings = spendingsList

    return spendings.map(item => {
      return (
        <SpendingsItem
          key={item.id}
          size={size}
          data={item}
          deleteSpending={deleteSpending}
          editSpending={editSpending}
        />
      )
    })
  }

  return <div className={`spendings-list spendings-list_${size}`}>{renderList()}</div>
}
