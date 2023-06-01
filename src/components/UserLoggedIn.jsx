import React, { useState } from 'react'
import DropdownUser from './DropdownUser'
import carrito from '../assets/carrito.png'
import user from '../assets/user.png'
import { NavLink } from 'react-router-dom'

const UserLoggedIn = () => {
  const [isLoggin, setIsLoggin] = useState(false)
  return (
    <section className='userLoggedIn'>
      {isLoggin
        ? (
          <div className='dropdownUser'>
            <DropdownUser />
            <button id='buttonCartIcon'>
              <img src={carrito} alt='' />
              Carrito
            </button>
          </div>
          )
        : (
          <NavLink id='buttonLogin' to='/login/'>
            <img src={user} />
            Login
          </NavLink>
          )}
    </section>
  )
}

export default UserLoggedIn
