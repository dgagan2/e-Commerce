import React from 'react'
import logo from '@/assets/logo.png'
import { Link } from 'react-router-dom'
import '@/page/login/login.css'
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
      <main className='containerLogin'>
        <section className='containeFormLogin'>
          <form action='' className='formLogin'>
            <h3>Inicio de sesion</h3>
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
              <Link to='/'>
                <button>Volver</button>
              </Link>

            </div>
          </form>
        </section>
      </main>
    </>

  )
}

export default Login
