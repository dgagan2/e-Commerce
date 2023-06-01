import DropdownCategories from './DropdownCategories'
import logo from '../assets/logo.png'
import buscar from '../assets/buscar.png'
import '../components/Navbar.css'
import UserLoggedIn from './UserLoggedIn'
const Navbar = () => {
  return (
    <nav>
      <img src={logo} id='logo' />
      <div className='sectionSearch'>
        <DropdownCategories />
        <form className='formSearch'>
          <input type='text' placeholder='' name='' />
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
