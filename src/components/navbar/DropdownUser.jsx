import React from 'react'
import { useUserContext } from '../../hooks/UseUserContext'
import { Link } from 'react-router-dom'
const DropdownUser = () => {
  const { userPayload, logout } = useUserContext()
  return (
    <>
      <div className='dropdown'>
        <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
          User
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li><Link className='dropdown-item' to='/' onClick={logout}>Salir</Link></li>
        </ul>
      </div>

    </>
  )
}

export default DropdownUser
