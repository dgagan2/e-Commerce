/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const NavbarAdminProducts = ({ setSelectedOption }) => {
  return (
    <nav className='navbar navbar-expand-sm' style={{ backgroundColor: '#808080c2' }}>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item dropdown'>
              <Link className='nav-link dropdown-toggle' id='navbarProducts' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Productos
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarProducts'>
                <li><Link className='dropdown-item' to='/inventory' onClick={() => setSelectedOption(1)}>Agregar Productos</Link></li>
                <li><Link className='dropdown-item' to='/inventory' onClick={() => setSelectedOption(2)}>Eliminar/Editar Productos</Link></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <Link className='nav-link dropdown-toggle' id='navbarCategories' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Categorias
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarCategories'>
                <li><Link className='dropdown-item' to='/inventory' onClick={() => setSelectedOption(4)}>Agregar Categorias</Link></li>
                <li><Link className='dropdown-item' to='/inventory' onClick={() => setSelectedOption(5)}>Eliminar Categorias</Link></li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <Link className='nav-link dropdown-toggle' id='navbarUser' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Usuarios
              </Link>
              <ul className='dropdown-menu' aria-labelledby='navbarUser'>
                <li><Link className='dropdown-item'>Action</Link></li>
                <li><Link className='dropdown-item'>Another action</Link></li>
                <li><Link className='dropdown-item'>Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAdminProducts
