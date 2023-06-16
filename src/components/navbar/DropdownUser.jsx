import React from 'react'
import { useUserContext } from '../../hooks/UseUserContext'
import { Link } from 'react-router-dom'
const DropdownUser = () => {
  const { profile, logout } = useUserContext()
  return (
    <>
      <div className='dropdown'>
        <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
          {profile.name}
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          {profile.role === 'admin'
            ? <li><Link className='dropdown-item' to='/inventory'>Administrar Productos</Link></li>
            : null}
          <li><Link className='dropdown-item' to='/' onClick={logout}>Salir</Link></li>
        </ul>
      </div>

    </>
  )
}

export default DropdownUser
