import React from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import { useNavigate } from 'react-router-dom'
const AddShoppingCart = (product) => {
  const { setShoppingList, isLoggin } = useProductContext()
  const navigate = useNavigate()
  return (
    <>
      {isLoggin
        ? setShoppingList(product)
        : (navigate('/login'))}
    </>
  )
}

export default AddShoppingCart
