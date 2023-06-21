import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../hooks/UseProductContext'
const DropdownCategories = () => {
  const { newCategories } = useProductContext()
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
