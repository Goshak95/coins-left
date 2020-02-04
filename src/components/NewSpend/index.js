import React from 'react'
import './styles.scss'

export const NewSpend = props => {
  return (
    <div className="new-spending">
      <input
        className="new-spending__input"
        type="text"
        name="spending"
        placeholder="Type new spend here"
      />
      <button className="new-spending__btn">
        <i className="new-spending__icon material-icons">add</i>
      </button>
    </div>
  )
}
