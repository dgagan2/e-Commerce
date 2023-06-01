import DropdownCategories from './DropdownCategories'
import logo from '../assets/logo.png'
import buscar from '../assets/buscar.png'
import '../components/Navbar.css'
import UserLoggedIn from './UserLoggedIn'
import { Link } from 'react-router-dom'
import { GetAllProduct } from '../API/getData'
import { useState } from 'react'
const Navbar = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
    if (!search) {
      GetAllProduct(search)
    } else {
      if (search === '') {
        setError('El campo no puede estar vacio')
      }
    }
  }
  console.log(error, search)
  return (
    <nav>
      <Link to='/'>
        <img src={logo} id='logo' />
      </Link>
      <div className='sectionSearch'>
        <DropdownCategories />
        <form className='formSearch' onSubmit={handleSubmit}>
          <input type='text' placeholder='' name='search' id='search' value={search} onChange={(event) => handleSubmit(event)} />
          <button className='searchButton'>
            <img src={buscar} />
          </button>
        </form>
      </div>

      <UserLoggedIn />

    </nav>

  )
}

export default Navbar
