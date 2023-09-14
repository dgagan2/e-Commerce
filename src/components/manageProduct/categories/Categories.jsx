import React, { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import { AddCategorie, DeleteCategorie, EditCategorie } from '../../../services/categoriesApi'
import Swal from 'sweetalert2'

const Categories = () => {
  const { handleCategories, newCategories } = useProductContext()
  const [dataCategorie, setDataCategorie] = useState([])
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDataCategorie({ ...dataCategorie, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const eraseBox = () => {
    setDataCategorie({ id: '', name: '', image: '' })
    handleCategories()
  }
  const handleAdd = async () => {
    try {
      const response = await AddCategorie(dataCategorie)
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Categoria creada',
          color: 'rgb(83, 83, 83)'
        }
        )
      }
      eraseBox()
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `La categoria no se ha creado, ${error}`
      })
    }
  }
  const handleEdit = async () => {
    try {
      const response = await EditCategorie(dataCategorie)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Categoria editada',
          color: 'rgb(83, 83, 83)'
        }
        )
        eraseBox()
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `La categoria no se ha editado, ${error}`
      })
    }
  }
  const handleDelete = async () => {
    try {
      const response = await DeleteCategorie(dataCategorie)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Categoria Eliminada',
          color: 'rgb(83, 83, 83)'
        }
        )
        eraseBox()
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `La categoria no se ha eliminado, ${error}`
      })
    }
  }
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
        <form className='needs-validation' id='formCategories' onSubmit={handleSubmit}>
          <div className='row g-3'>
            <h2>Agregar Categorias</h2>
            <div className='col-md-2'>
              <label htmlFor='id' className='form-label'>
                <font>
                  <font>Id</font>
                </font>
              </label>
              <input type='text' disabled id='title' value={dataCategorie.id} name='id' onChange={handleInputChange} className='form-control' />
            </div>
            <div className='col-md-4'>
              <label htmlFor='name' className='form-label'>
                <font>
                  <font>Nombre</font>
                </font>
              </label>
              <input type='text' id='title' value={dataCategorie.name} name='name' onChange={handleInputChange} className='form-control' />
            </div>
            <div className='col-md-6'>
              <label htmlFor='image' className='form-label'>
                <font>
                  <font>Imagen</font>
                </font>
              </label>
              <input type='text' id='image' value={dataCategorie.image} onChange={handleInputChange} name='image' className='form-control' />
            </div>
          </div>
          <button onClick={handleAdd}>Agregar</button>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={eraseBox}>Limpiar Campos</button>
        </form>
      </article>

      <article>
        <h3>Categorias existentes</h3>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Nombre Categoria</th>
              <th scope='col'>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {newCategories.map((categorie) => (
              <tr key={categorie.id} onClick={() => setDataCategorie(categorie)}>
                <td>{categorie.id}</td>
                <td>{categorie.name}</td>
                <td>{categorie.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default Categories
