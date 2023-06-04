/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const ProductsContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const changeLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  const data = {
    products,
    setProducts,
    search,
    setSearch,
    isLoading,
    setIsLoading,
    changeLoading,
    error,
    setError

  }
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductProvider }
