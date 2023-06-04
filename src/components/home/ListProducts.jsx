/* eslint-disable react/prop-types */
import React from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import { Link } from 'react-router-dom'
import addCarrito from '@/assets/icon.png'
const ListProducts = ({ newProducts }) => {
  const { error } = useProductContext()
  return (
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
              <Link>Ver detalles</Link>
              <button style={{ borderStyle: 'none', backgroundColor: 'transparent' }}>
                <img id='imgShoppingCart' src={addCarrito} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListProducts
