import DropdownCategories from './DropdownCategories'
import logo from '@/assets/logo.png'
import buscar from '@/assets/buscar.png'
import '@/components/navbar/Navbar.css'
import UserLoggedIn from './UserLoggedIn'
import { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { setSearch, setError, error } = useProductContext()
  const [localValue, setLocalValue] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (localValue === '') {
      setError('El campo no puede estar vacio')
      return
    }
    if (localValue.length > 1) {
      setError('')
      setSearch(localValue)
      setLocalValue('')
      return
    }
    if (error.length > 0) {
      setLocalValue('')
    }
  }
  return (
    <nav className='navHeader'>
      <Link to='/' onClick={(event) => setSearch('')}>
        <img src={logo} id='logo' />
      </Link>
      <div className='sectionSearch'>
        <DropdownCategories />
        <form className='formSearch' onSubmit={handleSubmit}>
          <input
            type='text' placeholder='Busca tu producto'
            name='search'
            id='search'
            value={localValue}
            onChange={(event) => setLocalValue(event.target.value)}
          />
          <button className='searchButton' onClick={handleSubmit}>
            <Link to={`/product/${localValue}`}>
              <img src={buscar} />
            </Link>
          </button>
        </form>
      </div>

      <UserLoggedIn />

    </nav>

  )
}

export default Navbar
