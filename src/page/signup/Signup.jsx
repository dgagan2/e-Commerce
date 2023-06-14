import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import logo from '@/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { registrerUser } from '../../services/userApi'
import validateForm from './validateForm'
import Swal from 'sweetalert2'
import './signup.css'
const Signup = () => {
  const [errorsRegitrerUser, setErrorsRegitrerUser] = useState({})
  const navigate = useNavigate()
  const sendData = async (data) => {
    const newErros = validateForm(input)
    setErrorsRegitrerUser(newErros)
    if (Object.keys(newErros).length === 0) {
      try {
        const response = await registrerUser(data)
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado',
            color: 'rgb(83, 83, 83)'
          }
          )
          navigate('/login')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          html: `El usuario no se ha creado ${error}`
        })
      }
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: '',
    name: '',
    role: 'customer',
    avatar: ''
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
      <main className='containerSignup'>
        <form className='formSignup' onSubmit={handleSubmit}>
          <section className='signupFormFields'>
            <h2>Registrate</h2>
            <div className='col-md-12'>
              <div>
                <label className='form-label' htmlFor='floatingEmail'>Email</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='name@example'
                  id='floatingEmail' value={input.email}
                  name='email' onChange={handleInputChange}
                />
              </div>
              {errorsRegitrerUser.email && <p className='errores'>{errorsRegitrerUser.email}</p>}
            </div>
            <div className='col-md-12'>
              <div>
                <label htmlFor='floatingPassword'>Contraseña</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='78d@-oLjU'
                  id='floatingPassword'
                  value={input.password} name='password'
                  onChange={handleInputChange}
                />
              </div>
              {errorsRegitrerUser.password && <p className='errores'>{errorsRegitrerUser.password}</p>}
            </div>

            <div className='col-md-12'>
              <div>
                <label htmlFor='floatingName'>Nombre</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Juan perez'
                  id='floatingName'
                  value={input.name}
                  name='name'
                  onChange={handleInputChange}
                />
              </div>
              {errorsRegitrerUser.name && <p className='errores'>{errorsRegitrerUser.name}</p>}
            </div>
            <div className='col-md-12'>
              <div>
                <label htmlFor='floatingAvatar'>Avatar</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enlace de la imagen'
                  id='floatingAvatar' value={input.avatar}
                  name='avatar' onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
          <section className='signupFormButtons'>
            <button>Registrarse</button>
            <button><Link to='/login' style={{ color: 'white' }}>Volver</Link></button>
          </section>
        </form>
      </main>
    </>
  )
}

export default Signup
