import React, { useState } from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import Navbar from '@/components/navbar/Navbar'
const ShoppingList = () => {
  const { shoppingList } = useProductContext()
  const [checked, setChecked] = useState([])
  const handleCheck = (event) => {
    const id = event.target.value
    if (event.target.checked) {
      setChecked([...checked, id])
    } else {
      const newChecked = checked.filter((data) => data !== id)
      setChecked(newChecked)
    }
  }

  const handleDelete = () => {
    const newShoppingList = shoppingList.filter((product) => product.id !== checked)
  }
  return (
    <>
      <Navbar />
      {Object.keys(shoppingList).length > 0
        ? <section style={{ padding: '70px 40px' }} className='listAddProducts'>
          <div className='d-flex flex-row containerButtons'>
            <button onClick={() => handleDelete()}>Eliminar</button>
          </div>
          <ul className='d-flex gap-4 flex-column'>
            {shoppingList?.map((product) => (
              <li key={product.id} style={{ listStyle: 'none' }}>
                <article className='d-flex gap-3 align-items-center'>
                  <input type='checkbox' value={product.id} onChange={(event) => handleCheck(event)} />
                  <img style={{ width: '110px' }} src={product?.images[0]} />
                  <div>
                    <p>{product?.title}</p>
                    <p>$ {product.price}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
        : <section className='d-flex flex-column gap-2' style={{ padding: '70px 40px' }}>
          <b>No hay productos agregados al carro de compras, vuelve y seleciona uno </b>
          </section>}

    </>
  )
}

export default ShoppingList
