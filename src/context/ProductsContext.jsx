/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { GetAllCategories } from '../services/API'

const ProductsContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [shoppingList, setShoppingList] = useState([])
  const [selectedOption, setSelectedOption] = useState(1)
  const [newCategories, setNewCategories] = useState([])
  const handleCategories = async () => {
    const response = await GetAllCategories()
    setNewCategories(response.data)
  }
  useEffect(() => {
    handleCategories()
  }, [])
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
    setError,
    shoppingList,
    setShoppingList,
    selectedOption,
    setSelectedOption,
    newCategories,
    handleCategories
  }
  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductProvider }
