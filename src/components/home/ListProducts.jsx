/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import { Link, useNavigate } from 'react-router-dom'
import addCarrito from '@/assets/icon.png'
import Pagination from './Pagination'
import { useUserContext } from '../../hooks/UseUserContext'
import Swal from 'sweetalert2'
const ListProductsHome = ({ newProducts }) => {
  const { error, setShoppingList, shoppingList } = useProductContext()
  const [productsByPage, setProductsByPage] = useState(15)
  const [currentPage, setCurrentePage] = useState(1)
  const totalProducts = newProducts.length
  const lastIndex = currentPage * productsByPage
  const firstIndez = lastIndex - productsByPage
  const { isLoggin } = useUserContext()
  const navigate = useNavigate()
  const AddShoppingCart = (product) => {
    if (isLoggin === true) {
      setShoppingList([...shoppingList, product])
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado'
      })
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <section className='listProducts'>
        {error
          ? <b className='fs-4 text-center' style={{ padding: '20px' }}>{error}</b>
          : null}
        <ul>
          {newProducts.map((p) => (
            <li key={p.id}>
              <img src={p?.images[0]} alt='' />
              <p>{p.title}</p>
              <p>{p.description}</p>
              <b>$ {p.price}</b>
              <div className='d-flex flex-row justify-content-evenly align-items-center'>
                <Link to={`/details/${p.id}`}>Ver detalles</Link>
                <button
                  style={{ borderStyle: 'none', backgroundColor: 'transparent' }}
                  onClick={() => AddShoppingCart({ ...p, cantidad: 1 })}
                >
                  <img id='imgShoppingCart' src={addCarrito} />
                </button>
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
  )
}

export default ListProductsHome
