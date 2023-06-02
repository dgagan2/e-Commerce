/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

const ProductsContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const data = {
    products,
    setProducts,
    search,
    setSearch
  }
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductProvider }
