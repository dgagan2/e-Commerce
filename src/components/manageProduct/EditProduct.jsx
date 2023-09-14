/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { GetProductById, UpdateProduct } from '../../services/API'
import Swal from 'sweetalert2'
import { useProductContext } from '@/hooks/UseProductContext'
const EditProduct = () => {
  const { setSelectedOption } = useProductContext()
  const { id } = useParams()
  const navigate = useNavigate()
  const [producToEdit, setProducToEdit] = useState({})
  const getProduct = async () => {
    try {
      const response = await GetProductById(id)
      if (response.status === 200) {
        setProducToEdit(response.data)
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `Producto no encontrado,  ${error}`,
        confirmButton: navigate('/')
      })
    }
  }
  useEffect(() => {
    getProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await UpdateProduct(id, producToEdit)
      if (response.status === 200) {
        setSelectedOption(1)
        Swal.fire({
          icon: 'success',
          title: 'Producto editado',
          color: 'rgb(83, 83, 83)',
          confirmButton: navigate('/inventory')
        }
        )
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `No se pudo editar el producto,  ${error}`
      })
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setProducToEdit({ ...producToEdit, [name]: value })
  }
  return (
    <section
      className='col-md-6 col-lg-6 col-sm-8'
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '80px'
      }}
    >
      <form className='needs-validation' id='formEditProducts' onSubmit={handleSubmit}>

        <div className='row g-3'>
          <h2>Editar Productos</h2>
          <div className='col-md-6'>
            <label htmlFor='title' className='form-label'>
              <font>
                <font>Titulo</font>
              </font>
            </label>
            <input type='text' className='form-control' value={producToEdit.title} onChange={handleInputChange} id='title' name='title' />

          </div>
          <div className='col-md-6'>
            <label htmlFor='price' className='form-label'>
              <font>
                <font>Precio</font>
              </font>
            </label>
            <input type='number' className='form-control' value={producToEdit.price} onChange={handleInputChange} id='price' name='price' />

          </div>
          <div className='col-md-12'>
            <label htmlFor='description' className='form-label'>
              <font>
                <font>Descripción</font>
              </font>
            </label>
            <textarea type='text' className='form-control' value={producToEdit.description} onChange={handleInputChange} id='description' name='description' placeholder='' />
          </div>
          <div className='col-md-12'>
            <label htmlFor='image' className='form-label'>
              <font>
                <font>Imagen</font>
              </font>
            </label>
            <input type='text' className='form-control' value={producToEdit.images} onChange={handleInputChange} id='image' name='images' />

          </div>
        </div>
        <button>Editar</button>
      </form>
    </section>
  )
}

export default EditProduct
