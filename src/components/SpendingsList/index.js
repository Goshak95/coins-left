import React from 'react'
import './styles.scss'
import { SpendingsItem } from '../SpendingsItem'

export const SpendingsList = ({ size = 'large', spendingsList = [] }) => {
  const renderList = () => {
    const spendings = spendingsList

    return spendings.map(item => {
      return <SpendingsItem key={+new Date(item.date)} size={size} data={item} />
    })
  }

  return <div className={`spendings-list spendings-list_${size}`}>{renderList()}</div>
}
