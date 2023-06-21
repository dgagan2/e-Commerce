import React, { useEffect, useState } from 'react'
import { DeleteUser, EditUser, GetUsers } from '../../../services/userApi'
import Swal from 'sweetalert2'

const User = () => {
  const [dataUser, setDataUser] = useState([])
  const [tempDataUser, setTempDataUser] = useState([])
  const handleUser = async () => {
    const response = await GetUsers()
    setTempDataUser(response.data)
  }
  const handleSubmit = (ev) => {
    ev.preventDefault()
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDataUser({ ...dataUser, [name]: value })
  }
  const eraseBox = () => {
    handleUser()
    setDataUser({
      id: '',
      name: '',
      email: '',
      role: '',
      password: '',
      avatar: ''
    })
  }
  const handleEditUser = async () => {
    try {
      const response = await EditUser(dataUser)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          color: 'rgb(83, 83, 83)'
        }
        )
        eraseBox()
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `El usuario no se ha creado, ${error}`
      })
    }
  }
  const handleDeleteUser = async () => {
    try {
      const response = await DeleteUser(dataUser)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario Eliminado',
          color: 'rgb(83, 83, 83)'
        }
        )
        eraseBox()
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `El usuario no se ha eliminado, ${error}`
      })
    }
  }
  useEffect(() => {
    handleUser()
  }, [])
  return (
    <section
      className='col-md-7 col-lg-7 col-sm-12 d-flex flex-column gap-5'
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '80px'
      }}
    >
      <article>
        <form className='needs-validation' id='formUser' onSubmit={handleSubmit}>
          <div className='row g-3'>
            <h2>Agregar Usuario</h2>
            <div className='col-sm-2'>
              <label htmlFor='id' className='form-label'>
                <font>
                  <font>Id</font>
                </font>
              </label>
              <input type='text' disabled id='id' value={dataUser.id} onChange={handleInputChange} name='id' className='form-control' />
            </div>
            <div className='col-sm-5'>
              <label htmlFor='email' className='form-label'>
                <font>
                  <font>Email</font>
                </font>
              </label>
              <input type='email' id='email' value={dataUser.email} onChange={handleInputChange} name='email' className='form-control' />
            </div>
            <div className='col-sm-5'>
              <label htmlFor='password' className='form-label'>
                <font>
                  <font>Contraseña</font>
                </font>
              </label>
              <input type='password' id='password' value={dataUser.password} onChange={handleInputChange} name='password' className='form-control' />
            </div>
            <div className='col-sm-6'>
              <label htmlFor='name' className='form-label'>
                <font>
                  <font>Nombre</font>
                </font>
              </label>
              <input type='name' id='names' value={dataUser.name} onChange={handleInputChange} name='name' className='form-control' />
            </div>
            <div className='col-sm-6'>
              <label htmlFor='role' className='form-label'><font><font>Role</font></font></label>
              <select className='form-select' value={dataUser.role} id='role' required='' name='role' onChange={handleInputChange}>
                <option value='admin' name='role'>Admin</option>
                <option value='customer' name='role'>Customer</option>
              </select>
            </div>
            <div className='col-md-12'>
              <label htmlFor='avatar' className='form-label'>
                <font>
                  <font>Imagen de perfil</font>
                </font>
              </label>
              <input type='avatar' id='avatar' value={dataUser.avatar} onChange={handleInputChange} name='avatar' className='form-control' />
            </div>
          </div>
          <button onClick={handleEditUser}>Editar</button>
          <button onClick={handleDeleteUser}>Eliminar</button>
        </form>
      </article>

      <article>
        <h3>Usuarios existentes</h3>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Correo</th>
              <th scope='col'>Role</th>
            </tr>
          </thead>
          <tbody>
            {tempDataUser?.map((user) => (
              <tr
                key={user.id}
                onClick={() => setDataUser({
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                  avatar: user.avatar
                })}
              >
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default User
