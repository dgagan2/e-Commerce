import React, { useState } from 'react'
import DropdownUser from './DropdownUser'
import carrito from '../assets/carrito.png'
import user from '../assets/user.png'

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
        : (<button id='buttonLogin'>
          <img src={user} />
          Login
           </button>
          )}
    </section>
  )
}

export default UserLoggedIn
