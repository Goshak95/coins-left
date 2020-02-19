import React from 'react'
import './styles.scss'
import { SpendingsItem } from '../SpendingsItem'

export const SpendingsList = ({
  size = 'large',
  spendingsList,
  categoriesList,
  deleteSpending,
  editSpending,
}) => {
  const renderList = () => {
    const spendings = spendingsList

    return spendings.map(item => {
      const itemCategory = categoriesList.find(categoryItem => categoryItem.id === item.category)
      const category_title = itemCategory ? itemCategory.title : 'Uncategorized'
      const icon_filename = itemCategory
        ? itemCategory.icon_filename
        : 'label_tag_shopping_price_3668848'
      return (
        <SpendingsItem
          key={item.id}
          size={size}
          data={item}
          categoriesList={categoriesList}
          category_title={category_title}
          icon_filename={icon_filename}
          deleteSpending={deleteSpending}
          editSpending={editSpending}
        />
      )
    })
  }

  return <div className={`spendings-list spendings-list_${size}`}>{renderList()}</div>
}
