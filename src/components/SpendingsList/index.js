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
      const extendedItem = Object.assign({}, item)
      extendedItem.category_title = itemCategory ? itemCategory.title : 'Uncategorized'
      extendedItem.icon_filename = itemCategory
        ? itemCategory.icon_filename
        : 'label_tag_shopping_price_3668848'
      return (
        <SpendingsItem
          key={item.id}
          size={size}
          data={extendedItem}
          deleteSpending={deleteSpending}
          editSpending={editSpending}
        />
      )
    })
  }

  return <div className={`spendings-list spendings-list_${size}`}>{renderList()}</div>
}
