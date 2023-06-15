import React from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import Navbar from '@/components/navbar/Navbar'
const ShoppingList = () => {
  const { shoppingList } = useProductContext()
  return (
    <>
      <Navbar />
      {shoppingList.map((product) => (
        <ul key={product.id}>
          <li>{product.title}</li>
        </ul>
      ))}
    </>
  )
}

export default ShoppingList
