import React from 'react'
//Para evitar el refresh importamos el link
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to='/private' activeClassName="active-link">Private</NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Nav