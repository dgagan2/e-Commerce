import React from 'react'
import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>
            <img src={logo} id='logo' />
          </Link>
        </nav>
      </header>
      <main>
        <section className='formLogin'>
          <form action=''>
            <h3>Inicio de sesion</h3>
            <div>
              <label htmlFor=''>Usuario</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Contraseña</label>
              <input type='text' />
            </div>
            <div>
              <button>Login</button>
              <button>Volver</button>
            </div>
          </form>
        </section>
      </main>
    </>

  )
}

export default Login
