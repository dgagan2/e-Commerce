import React from 'react'
import { useUserContext } from '../../hooks/UseUserContext'
const DropdownUser = () => {
  const { userPayload } = useUserContext()
  return (
    <>
      <div className='dropdown'>
        <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
          User
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li><a className='dropdown-item' href='#'>Action</a></li>
          <li><a className='dropdown-item' href='#'>Another action</a></li>
          <li><a className='dropdown-item' href='#'>Salir</a></li>
        </ul>
      </div>

    </>
  )
}

export default DropdownUser
