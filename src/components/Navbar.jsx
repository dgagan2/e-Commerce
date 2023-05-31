import Dropdown from './Dropdown'
import logo from '../assets/logo.png'
import buscar from '../assets/buscar.png'
import '../components/Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <img src={logo} className='logo' />
      <Dropdown />
      <form>
        <input type='text' placeholder='' name='' />
        <button>
          <img className='searchIcon' src={buscar} />
        </button>
      </form>
    </nav>

  )
}

export default Navbar
