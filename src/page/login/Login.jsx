import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import '@/page/login/login.css'
import { LoginJWT } from '../../services/userApi'
import validateLogin from './validateLogin'
import { useProductContext } from '@/hooks/UseProductContext'
const Login = () => {
  const { setIsLoggin } = useProductContext()
  const [errorsLogin, setErrorsLogin] = useState({})
  const navigateHome = useNavigate()
  const sendData = async (data) => {
    const newErros = validateLogin(input)
    setErrorsLogin(newErros)
    if (Object.keys(newErros).length === 0) {
      try {
        const response = await LoginJWT(input)
        if (response.status === 201) {
          localStorage.setItem('token', response.data.access_token)
          setIsLoggin(true)
          navigateHome('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  })
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
          <form className='formLogin' onSubmit={handleSubmit}>
            <h2>Inicio de sesión</h2>
            <div>
              <label htmlFor='email'>Usuario</label>
              <input
                type='text' placeholder='name@example.com'
                id='email' value={input.email}
                name='email'
                onChange={handleInputChange}
              />
              {errorsLogin.email && <p>{errorsLogin.email}</p>}
            </div>
            <div>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                placeholder=''
                id='password'
                value={input.password}
                name='password'
                onChange={handleInputChange}
              />
              {errorsLogin.password && <p>{errorsLogin.password}</p>}
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
