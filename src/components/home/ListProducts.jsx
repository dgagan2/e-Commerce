/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import { Link } from 'react-router-dom'
import addCarrito from '@/assets/icon.png'
import Pagination from './Pagination'
const ListProducts = ({ newProducts }) => {
  const { error } = useProductContext()
  const [productsByPage, setProductsByPage] = useState(12)
  const [currentPage, setCurrentePage] = useState(1)
  const totalProducts = newProducts.length
  const lastIndex = currentPage * productsByPage
  const firstIndez = lastIndex - productsByPage
  console.log(lastIndex, firstIndez)
  return (
    <>
      <section className='listProducts'>
        {error
          ? <b className='fs-4 text-center' style={{ padding: '20px' }}>{error}</b>
          : null}
        <ul>
          {newProducts.map((product) => (
            <li key={product.id}>
              <img src={product?.images[0]} alt='' />
              <p>{product.title}</p>
              <p>{product.description}</p>
              <b>$ {product.price}</b>
              <div className='d-flex flex-row justify-content-evenly align-items-center'>
                <Link to={`/details/${product.id}`}>Ver detalles</Link>
                <button style={{ borderStyle: 'none', backgroundColor: 'transparent' }}>
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

export default ListProducts
