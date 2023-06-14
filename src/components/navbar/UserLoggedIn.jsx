import React, { useState } from 'react'
import DropdownUser from './DropdownUser'
import carrito from '@/assets/carrito.png'
import user from '@/assets/user.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useProductContext } from '@/hooks/UseProductContext'
const UserLoggedIn = () => {
  const { isLoggin } = useProductContext()
  const navigate = useNavigate()
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
          <NavLink id='buttonLogin' to='/login/' style={{ color: 'white' }}>
            <img src={user} />
            Login
          </NavLink>
          )}
    </section>
  )
}

export default UserLoggedIn
