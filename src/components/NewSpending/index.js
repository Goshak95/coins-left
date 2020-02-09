import React from 'react'
import './styles.scss'
import { useState } from 'react'
import { Formik, Field } from 'formik'
import uuid from 'uuid/v1'

const NewSpending = ({ addSpending }) => {
  const [open, toggleOpen] = useState(false)

  return (
    <div className="new-spending">
      <div className="new-spending__header">
        <h3 className="new-spending__title">Add new Spending</h3>
        <button className="new-spending__btn" onClick={() => toggleOpen(!open)}>
          <i className="new-spending__icon material-icons">add</i>
        </button>
      </div>
      {open && (
        <Formik
          onSubmit={(data, { resetForm }) => {
            addSpending(data)
          }}
          initialValues={{ id: uuid(), title: '', category: '', cost: 0, date: Date.now() }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="new-spending__form form">
              <Field
                className="form__input"
                type="text"
                name="title"
                placeholder="Spending title"
              />
              <Field
                className="form__input"
                type="text"
                name="category"
                placeholder="Spending title"
              />
              <Field className="form__input" type="text" name="cost" placeholder="Spending title" />
              <button type="submit">Add Spending</button>
            </form>
          )}
        </Formik>
      )}
    </div>
  )
}

export { NewSpending }
