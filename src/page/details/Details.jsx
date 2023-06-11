import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Product } from '@/services/API'
import '../details/details.css'
import Navbar from '../../components/navbar/Navbar'
const Details = () => {
  const { id } = useParams('')
  const [productDetails, setProductDetails] = useState([])
  const [selectedImage, setSelectedImage] = useState()
  useEffect(() => {
    fetch(`${Product}/${id}`)
      .then(res => res.json())
      .then(data => setProductDetails([data]))
  }, [id])
  return (
    <>
      <Navbar />
      {productDetails.map((product) => (
        <main key={product.id} className='d-flex justify-content-center' style={{ padding: '0px 100px 0px 100px' }}>
          <section className='viewDetailsProducts d-flex flex-column' style={{ gap: '50px' }}>
            <article className='d-flex' style={{ borderStyle: 'groove', padding: '30px' }}>
              <div className='d-flex'>
                {product.images.map((image, index) => (
                  <img style={{ width: '100px' }} key={index} src={image} alt={`Image ${index}`} onClick={() => setSelectedImage(image)} />
                ))}
              </div>
              <div style={{ width: '70%' }}>
                <img style={{ width: '350px' }} src={selectedImage} alt='' />
              </div>
            </article>
            <article>
              <p>{product.description}</p>
              <p>Categoria: {product.category.name}</p>
            </article>
          </section>
          <section className='containerButtons'>
            <b>{product.title}</b>
            <b>$ {product.price}</b>
            <div className='d-flex flex-row'>
              <p>Cantidad</p>
              <select>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            <button>Agregar al Carrito</button>
            <button>Comprar Ahora</button>
          </section>
        </main>

      ))}
    </>
  )
}

export default Details
