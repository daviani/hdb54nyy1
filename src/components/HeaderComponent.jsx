import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const NavBar = () => {

  return (
    <nav className="navbar customNavBar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to={'/'}>
        <img src={logo} className="App-logo" alt="logo"/>
      </NavLink>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse  ml-5">
        <ul className="navbar-nav mr-auto">
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/appartements'>
              Appartements
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/clients'>
              Clients
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/reservations'>
              Réservations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

