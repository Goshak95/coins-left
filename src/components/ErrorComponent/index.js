import React from 'react'
import './styles.scss'

export const ErrorComponent = ({ message }) => {
  return (
    <div className="error">
      <h1>Ooops... Something went wrong</h1>
      <p>
        Here was gonna be some cool stuff but an error accured: <b>{message}</b> :(
      </p>
    </div>
  )
}
