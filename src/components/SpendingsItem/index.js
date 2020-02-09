import React, { useEffect, useState } from 'react'
import './styles.scss'

export const SpendingsItem = ({ data, size = 'large', deleteSpending }) => {
  const iconSize = {
    width: size === 'large' ? 50 : 30,
    height: size === 'large' ? 60 : 40,
  }
  const deleteHandler = () => {
    const id = data.id
    deleteSpending(id)
  }

  const toggleSave = () => {
    const changedData = {
      id: data.id,
      category: document.querySelector('.spending-item__category').textContent,
      title: document.querySelector('.spending-item__title').textContent,
      date: document.querySelector('.spending-item__date').textContent,
    }
    console.log(changedData)
    toggleEdit(!edit)
  }

  const [edit, toggleEdit] = useState(false)
  return (
    <div className={`spending-item-wrapper spending-item-wrapper_${size}`}>
      <div className="spending-item">
        <div className="spending-item__general-info">
          <img
            className="spending-item__icon"
            width={iconSize.width}
            height={iconSize.height}
            alt="Logo"
          />
          <div className="spending-item__info">
            <p
              contentEditable={edit}
              className={`spending-item__category ${edit ? 'spending-item_editable' : ''}`}
            >
              {data.category}
            </p>
            <p
              contentEditable={edit}
              className={`spending-item__date ${edit ? 'spending-item_editable' : ''}`}
            >
              {data.date}
            </p>
          </div>
        </div>
        <div className="spending-item__title">
          <p className={`${edit ? 'spending-item_editable' : ''}`} contentEditable={edit}>
            {data.title}
          </p>
        </div>
        <div className="spending-item__money-info">{data.cost} ₽</div>
      </div>
      <div className="spending-item-wrapper__controls spending-controls">
        {edit ? (
          <button className="spending-controls__item" onClick={() => toggleSave()}>
            <i className="material-icons">save</i>
          </button>
        ) : (
          <button className="spending-controls__item" onClick={() => toggleEdit(!edit)}>
            <i className="material-icons">edit</i>
          </button>
        )}

        <button className="spending-controls__item" onClick={deleteHandler}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  )
}
