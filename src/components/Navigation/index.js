import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

export function Navigation() {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/Spendings"
          className="nav__link"
          activeClassName="nav__link_active"
        >
          Spendings
        </NavLink>
      </li>
    </ul>
  )
}
