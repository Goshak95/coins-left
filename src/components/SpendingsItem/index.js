import React, { useState } from 'react'
import './styles.scss'

export const SpendingsItem = ({ data, size = 'large', deleteSpending, editSpending }) => {
  const iconSize = {
    width: size === 'large' ? 50 : 30,
    height: size === 'large' ? 60 : 40,
  }
  const deleteHandler = () => {
    const id = data.id
    deleteSpending(id)
  }

  const toggleSave = e => {
    let isUpdated = false

    const changedData = {
      id: data.id,
      title: document.querySelector(`.spending-item__title.edit${data.id}`).textContent,
      cost: document.querySelector(`.spending-item__cost.edit${data.id}`).textContent,
      category: document.querySelector(`.spending-item__category.edit${data.id}`).textContent,
      date: document.querySelector(`.spending-item__date.edit${data.id}`).textContent,
    }

    for (let key in changedData) {
      if (changedData[key] !== data[key]) {
        isUpdated = true
        break
      }
    }

    if (isUpdated) {
      editSpending(changedData)
    }
    toggleEdit(!edit)
  }

  const [edit, toggleEdit] = useState(false)
  return (
    <div className={`spending-item-wrapper spending-item-wrapper_${size}`}>
      <div className="spending-item">
        <div className="spending-item__general-info">
          <img
            src={`/images/icons/${data.icon_filename}.png`}
            className="spending-item__icon"
            width={iconSize.width}
            height={iconSize.height}
            alt="Logo"
          />
          <div className="spending-item__info">
            <p
              contentEditable={edit}
              className={`spending-item__category ${
                edit ? 'spending-item_editable edit' + data.id : ''
              }`}
            >
              {data.category_title}
            </p>
            <p
              contentEditable={edit}
              className={`spending-item__date ${
                edit ? 'spending-item_editable edit' + data.id : ''
              }`}
            >
              {data.date}
            </p>
          </div>
        </div>
        <div className="spending-item__title">
          <p
            className={`spending-item__title ${
              edit ? 'spending-item_editable edit' + data.id : ''
            }`}
            contentEditable={edit}
          >
            {data.title}
          </p>
        </div>
        <div className={`spending-item__money-info ${edit ? 'spending-item_editable' : ''}`}>
          <span
            contentEditable={edit}
            className={`spending-item__cost ${edit ? 'edit' + data.id : ''}`}
          >
            {data.cost}
          </span>{' '}
          ₽
        </div>
      </div>
      <div className="spending-item-wrapper__controls spending-controls">
        {edit ? (
          <button className="spending-controls__item" onClick={e => toggleSave(e)}>
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
