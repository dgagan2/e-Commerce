import React from 'react'
import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'
import '@/page/login/login.css'
const Login = () => {
  return (
    <>
      <header>
        <nav className='navLogin'>
          <Link to='/'>
            <img src={logo} id='logo' />
          </Link>
        </nav>
      </header>
      <main className='containerLogin'>
        <section className='containeFormLogin'>
          <form className='formLogin'>
            <h2>Inicio de sesión</h2>
            <div>
              <label htmlFor=''>Usuario</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Contraseña</label>
              <input type='password' />
            </div>
            <div className='containerButton'>
              <button>Login</button>
              <button>
                <Link style={{ color: 'white' }} to='/'>Volver</Link>
              </button>
              <Link style={{ color: 'black', textAlign: 'center' }} to='/signup'>Crea tu cuenta</Link>
            </div>
          </form>
        </section>
      </main>
    </>

  )
}

export default Login
