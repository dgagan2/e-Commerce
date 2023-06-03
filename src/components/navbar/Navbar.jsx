import DropdownCategories from './DropdownCategories'
import logo from '@/assets/logo.png'
import buscar from '@/assets/buscar.png'
import '@/components/navbar/Navbar.css'
import UserLoggedIn from './UserLoggedIn'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
const Navbar = () => {
  const [error, setError] = useState('')
  const { setSearch } = useProductContext()
  const [localValue, setLocalValue] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (localValue === '') {
      setError('El campo no puede estar vacio')
      return
    }
    if (localValue.length > 3) {
      setError('')
      setSearch(localValue)
      return
    }
    if (error.length > 0) {
      setSearch('')
    }
  }
  return (
    <nav>
      <Link to='/'>
        <img src={logo} id='logo' />
      </Link>
      <div className='sectionSearch'>
        <DropdownCategories />
        <form className='formSearch' onSubmit={handleSubmit}>
          <input type='text' placeholder='Busca tu producto' name='search' id='search' value={localValue} onChange={(event) => setLocalValue(event.target.value)} />
          <button className='searchButton' onClick={handleSubmit}>
            <img src={buscar} />
          </button>

        </form>
      </div>

      <UserLoggedIn />

    </nav>

  )
}

export default Navbar
