import React from 'react'
import { GetAllCategories } from '../../API/getData'
import { Link } from 'react-router-dom'
const DropdownCategories = () => {
  const newCategories = GetAllCategories()
  return (
    <>
      <div className='dropdown'>
        <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
          Categorias
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          {newCategories.map((Categories) => (
            <li key={Categories.id}><Link className='dropdown-item' to={`/${Categories.id}`}>{Categories.name}</Link></li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default DropdownCategories
