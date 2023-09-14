/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Pagination from '@/components/home/Pagination'
import { AddProduct, DeleteProduct, GetAllProduct } from '@/services/API'
import buscar from '@/assets/buscar.png'
import useForm from '@/hooks/useForm'
import validateFormProducts from '../../page/manageProducts/validateFormProducts'
import Swal from 'sweetalert2'
import { useProductContext } from '@/hooks/UseProductContext'
import Loading from '@/components/isLoading/Loading'
import { Link } from 'react-router-dom'

const AddProducts = () => {
  const { newCategories } = useProductContext()
  const [errorsAddProduct, setErrorsAddProduct] = useState({})
  const sendData = async (data) => {
    const newErros = validateFormProducts(input)
    setErrorsAddProduct(newErros)
    if (Object.keys(newErros).length === 0) {
      try {
        const response = await AddProduct(input)
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Producto creado',
            color: 'rgb(83, 83, 83)'
          }
          )
          data = ''
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          html: `Producto no se ha creado, ${error}`
        })
      }
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    title: '',
    price: '',
    description: '',
    categoryId: '',
    images: ''
  })
  return (
    <section
      className='col-md-7 col-lg-7 col-sm-12'
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: '80px'
      }}
    >
      <form className='needs-validation' id='formAddProducts' onSubmit={handleSubmit}>
        <div className='row g-3'>
          <h2>Agregar Productos</h2>
          <div className='col-sm-4'>
            <label htmlFor='title' className='form-label'>
              <font style={{ verticalalign: 'inherit' }}>
                <font style={{ verticalalign: 'inherit' }}>Titulo</font>
              </font>
            </label>
            <input type='text' className='form-control' id='title' placeholder='Nombre del producto' value={input.name} name='title' onChange={handleInputChange} />
            {errorsAddProduct.title
              ? <p style={{ fontSize: '.875em', color: '#dc3545' }}>{errorsAddProduct.title}</p>
              : null}
          </div>
          <div className='col-sm-4'>
            <label htmlFor='price' className='form-label'>
              <font style={{ verticalalign: 'inherit' }}>
                <font style={{ verticalalign: 'inherit' }}>Precio</font>
              </font>
            </label>
            <input type='number' className='form-control' id='price' placeholder='$' name='price' value={input.price} onChange={handleInputChange} />
            {errorsAddProduct.price
              ? <p style={{ fontSize: '.875em', color: '#dc3545' }}>{errorsAddProduct.price}</p>
              : null}
          </div>
          <div className='col-sm-4'>
            <label htmlFor='categorie' className='form-label'>Categoria</label>
            <select className='form-select' id='categorie' name='categoryId' value={input.categoryId} onChange={handleInputChange} style={{ height: 'auto' }}>
              {newCategories.map((Categories) => (
                <option key={Categories.id} value={Categories.id}>{Categories.name}</option>
              ))}
            </select>
            {errorsAddProduct.categoryId
              ? <p style={{ fontSize: '.875em', color: '#dc3545' }}>{errorsAddProduct.categoryId}</p>
              : null}
          </div>
          <div className='col-sm-12'>
            <label htmlFor='description' className='form-label'>
              <font style={{ verticalalign: 'inherit' }}>
                <font style={{ verticalalign: 'inherit' }}>Descripción</font>
              </font>
            </label>
            <textarea type='text' className='form-control' id='description' value={input.description} name='description' onChange={handleInputChange} placeholder='' />
            {errorsAddProduct.description
              ? <p style={{ fontSize: '.875em', color: '#dc3545' }}>{errorsAddProduct.description}</p>
              : null}
          </div>
          <div className='col-sm-12'>
            <label htmlFor='image' className='form-label'>
              <font style={{ verticalalign: 'inherit' }}>
                <font style={{ verticalalign: 'inherit' }}>Imagen</font>
              </font>
            </label>
            <input type='text' className='form-control' id='image' name='images' value={input.images} onChange={handleInputChange} />
            {errorsAddProduct.images
              ? <p style={{ fontSize: '.875em', color: '#dc3545' }}>{errorsAddProduct.images}</p>
              : null}
          </div>
        </div>
        <button>Agregar</button>
      </form>
    </section>
  )
}

const DeleteProducts = () => {
  const productsByPage = 33
  const [currentPage, setCurrentePage] = useState(1)
  const lastIndex = currentPage * productsByPage
  const firstIndez = lastIndex - productsByPage

  const [localValue, setLocalValue] = useState('')
  const { isLoading, setSearch, setSelectedOption } = useProductContext()
  const products = GetAllProduct()
  const totalProducts = products.length

  const handleSubmit = (event) => {
    event.preventDefault()
    if (localValue) {
      setSearch(localValue)
      setLocalValue('')
    }
  }
  const handleDelete = async (data) => {
    try {
      const response = await DeleteProduct(data.id)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Producto Eliminado',
          color: 'rgb(83, 83, 83)',
          width: '20em'
        }
        )
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `No se elimino el producto,  ${error}`
      })
    }
  }

  return (
    <>
      {isLoading
        ? <Loading />
        : (
          <>
            <section className='formSearchProduct' style={{ padding: '30px 0px 0px 40px' }}>
              <form className='d-flex' onSubmit={handleSubmit}>
                <div className='form-floating d-flex flex-row'>
                  <input type='text' className='form-control' id='floatingInput' placeholder='producto' value={localValue} onChange={(event) => setLocalValue(event.target.value)} />
                  <label htmlFor='floatingInput'>
                    <font style={{ verticalalign: 'inherit' }}>
                      <font style={{ verticalalign: 'inherit' }}>Buscar Producto</font>
                    </font>
                  </label>
                  <button style={{ borderStyle: 'none', backgroundColor: 'transparent' }}><img src={buscar} alt='buscar' style={{ width: '25px', height: '25px' }} /></button>
                </div>
              </form>
            </section>
            <section style={{ padding: '70px 40px' }} className='listDeleteProducts'>
              <ul>
                {products?.map((product) => (
                  <li key={product.id} style={{ listStyle: 'none' }}>
                    <div>
                      <img style={{ width: '110px' }} src={product?.images[0]} />
                      <div>
                        <p>{product?.title}</p>
                        <p>$ {product.price}</p>
                      </div>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                      <button><Link to={`/inventory/edit/${product.id}`} onClick={() => setSelectedOption(3)}>Editar</Link></button>
                      <button onClick={() => handleDelete(product)}>Eliminar</button>
                    </div>
                  </li>
                )).slice(firstIndez, lastIndex)}
              </ul>
            </section>
            <Pagination
              productsByPage={productsByPage}
              currentPage={currentPage}
              setCurrentePage={setCurrentePage}
              totalProducts={totalProducts}
            />
          </>
          )}

    </>
  )
}

export { AddProducts, DeleteProducts }
