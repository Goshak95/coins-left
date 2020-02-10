import React from 'react'
import './styles.scss'
import { SpendingsDate } from '../SpendingsDate'
import { NewSpending } from '../NewSpending'
import { SpendingsList } from '../SpendingsList'

export const DayCard = ({ spendingsList, categories, icons, actions }) => {
  const mappedCategories = categories.reduce((acc, item, index) => {
    acc.push(item)
    let icon = icons.find(icon => icon.id === item.icon_id)
    acc[index].icon_filename = icon ? icon.filename : ''
    return acc
  }, [])
  return (
    <div className="day-card">
      <div className="day-card__header">
        <SpendingsDate />
        <NewSpending addSpending={actions.addSpending} />
      </div>
      <SpendingsList
        spendingsList={spendingsList}
        categoriesList={mappedCategories}
        deleteSpending={actions.deleteSpending}
        editSpending={actions.editSpending}
      />
    </div>
  )
}
