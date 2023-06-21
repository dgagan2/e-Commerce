import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Product } from '@/services/API'
import '../details/details.css'
import Navbar from '../../components/navbar/Navbar'
import { useUserContext } from '@/hooks/UseUserContext'
import { useProductContext } from '@/hooks/UseProductContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Details = () => {
  const { setShoppingList, shoppingList } = useProductContext()
  const { isLoggin } = useUserContext()
  const navigate = useNavigate()
  const { id } = useParams('')
  const [productDetails, setProductDetails] = useState([])
  const [selectedImage, setSelectedImage] = useState()
  const cantidad = useRef()
  const AddShoppingCart = (producto) => {
    if (isLoggin === true) {
      setShoppingList([...shoppingList, producto])
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado'
      })
    } else {
      navigate('/login')
    }
  }

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
              <div className='d-flex gap-3  '>
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
            <div className='d-flex flex-row gap-2'>
              <label>Cantidad</label>
              <input name='cantidad' ref={cantidad} style={{ width: '40px', textAlign: 'center' }} />
            </div>
            <button onClick={() => AddShoppingCart({
              id: product.id,
              title: product.title,
              price: product.price,
              description: product.description,
              category: product.category,
              images: [product.images],
              cantidad: cantidad.current.value
            })}
            >Agregar al Carrito
            </button>
          </section>
        </main>

      ))}
    </>
  )
}

export default Details
