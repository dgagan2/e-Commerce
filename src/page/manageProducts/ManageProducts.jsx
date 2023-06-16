import React, { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import Navbar from '../../components/navbar/Navbar'
import { GetAllProduct } from '@/services/API'
import { useParams } from 'react-router'
import Pagination from '@/components/home/Pagination'
const ManageProducts = () => {
  const { products } = useProductContext()
  const productsByPage = 15
  const [currentPage, setCurrentePage] = useState(1)
  const totalProducts = products.length
  const lastIndex = currentPage * productsByPage
  const firstIndez = lastIndex - productsByPage
  return (
    <>
      <Navbar />
      <section style={{ padding: '70px 40px' }} className='listAddProducts'>
        <div className='d-flex flex-row containerButtons'>
          <button>Agregar Productos</button>
        </div>
        <ul className=''>
          {products?.map((product) => (
            <li key={product.id} style={{ listStyle: 'none' }}>
              <article className='d-flex'>
                <div>
                  <img style={{ width: '110px' }} src={product?.images[0]} />
                  <div>
                    <p>{product?.title}</p>
                    <p>$ {product.price}</p>
                  </div>
                </div>
                <button>Eliminar</button>
              </article>
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

export default ManageProducts
