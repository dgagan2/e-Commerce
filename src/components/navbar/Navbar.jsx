import DropdownCategories from './DropdownCategories'
import logo from '@/assets/logo.png'
import buscar from '@/assets/buscar.png'
import '@/components/navbar/Navbar.css'
import UserLoggedIn from './UserLoggedIn'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useProductContext } from '../../hooks/UseProductContext'
const Navbar = () => {
  const [error, setError] = useState('')
  const { search, setSearch } = useProductContext()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (search === '') {
      setError('El campo no puede estar vacio')
      return
    }
    if (search.length > 3) {
      setError('')
      return
    }
    if (error.length > 0) {
      setSearch('')
    }
  }
  console.log(error)
  return (
    <nav>
      <Link to='/'>
        <img src={logo} id='logo' />
      </Link>
      <div className='sectionSearch'>
        <DropdownCategories />
        <form className='formSearch' onSubmit={handleSubmit}>
          <input type='text' placeholder={error ? `${error}` : 'Busca tu producto'} name='search' id='search' value={search} onChange={(event) => setSearch(event.target.value)} />
          <button className='searchButton' onSubmit={handleSubmit}>
            <img src={buscar} />
          </button>

        </form>
      </div>

      <UserLoggedIn />

    </nav>

  )
}

export default Navbar
