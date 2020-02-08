import React from 'react'
import './styles.scss'

export const SpendingsItem = ({ data, size = 'large' }) => {
  return (
    <div className={`spending-item spending-item_${size}`}>
      <div className="spending-item__general-info">
        <img
          className="spending-item__icon"
          width="50"
          height="60"
          alt="Logo"
        />
        <div className="spending-item__info">
          <p className="spending-item__category">{data.category}</p>
          <p className="spending-item__date">{data.date}</p>
        </div>
      </div>
      <div className="spending-item__title">
        <p>{data.title}</p>
      </div>
      <div className="spending-item__money-info">{data.cost} ₽</div>
    </div>
  )
}
