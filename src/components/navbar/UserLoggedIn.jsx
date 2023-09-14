import React from 'react'
import DropdownUser from './DropdownUser'
import carrito from '@/assets/carrito.png'
import user from '@/assets/user.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../../hooks/UseUserContext'
const UserLoggedIn = () => {
  const { isLoggin } = useUserContext()
  const navigate = useNavigate()

  return (
    <section className='userLoggedIn'>
      {isLoggin
        ? (
          <div className='dropdownUser'>
            <DropdownUser />
            <button id='buttonCartIcon' onClick={() => navigate('/shopping')}>
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
