/* eslint-disable react/no-unknown-property */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import Navbar from '@/components/navbar/Navbar'
import quitar from '@/assets/quitar-del-carrito.png'
const ShoppingList = () => {
  const { shoppingList, setShoppingList } = useProductContext()
  let total = 0
  shoppingList.forEach(item => {
    const subtotal = item.price * item.cantidad
    total += subtotal
  })

  const handleDelete = (id) => {
    const newShoppingList = shoppingList.filter((product) => product.id != id)
    setShoppingList(newShoppingList)
  }
  return (
    <>
      <Navbar />
      {Object.keys(shoppingList).length > 0
        ? <section style={{ padding: '70px 40px' }} className='listAddProducts'>
          <div className='table-responsive-md'>
              <table className='table table-hover'>
                <thead>
                  <th scope='col'>Cantidad</th>
                  <th scope='col'>Producto</th>
                  <th scope='col'>Valor unitario</th>
                  <th scope='col'>Valor por item</th>
                  <th scope='col'>Quitar</th>
                </thead>
                <tbody>
                  {shoppingList?.map((p) => (
                    <tr key={p.id}>
                      <td><input type='text' name='cantidad' id='cantidad' value={p.cantidad} /></td>
                      <td>
                        <div>
                          <img style={{ width: '80px' }} src={p?.images} alt='' />
                          <p>{p?.title}</p>
                        </div>
                      </td>
                      <td>$ {p.price}</td>
                      <td>$ {p.price * p.cantidad}</td>
                      <td> <button className='iconQuitarProducto' onClick={() => handleDelete(p.id)}><img src={quitar} /></button></td>
                    </tr>
                  ))}
                    <tr>
                      <td colSpan='2' style={{ textAlign: 'end' }}>Total</td>
                      <th scope='row'>$ {total}</th>
                    </tr>
                </tbody>
              </table>
            </div>
          </section>
        : <section className='d-flex flex-column gap-2' style={{ padding: '70px 40px', textAlign: 'center' }}>
          <b>No hay productos agregados al carro de compras, vuelva y seleciona uno </b>
        </section>}

    </>
  )
}

export default ShoppingList
