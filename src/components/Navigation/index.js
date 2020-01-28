import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navigation() {
    return (
        <nav>
            <NavLink to='/' activeClassName="menu-item_selected">Home</NavLink>
            <NavLink to='/expenses' activeClassName="menu-item_selected">Expenses</NavLink>
        </nav>
    )
}