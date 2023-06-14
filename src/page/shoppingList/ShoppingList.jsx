import React from 'react'
import { useProductContext } from '@/hooks/UseProductContext'
import Navbar from '@/components/navbar/Navbar'
import NotFound from '../NotFound'
const ShoppingList = () => {
  const { shoppingList, isLoggin } = useProductContext()
  return (
    <>
      {
        isLoggin
          ? (
            <Navbar />
            )
          : <NotFound />
    }

    </>
  )
}

export default ShoppingList
