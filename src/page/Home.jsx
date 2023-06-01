import { useCallback, useState } from 'react'
import { GetAllProduct } from '../API/getData'
const Home = () => {
  const [products, setProducts] = useState()
  const getProducts = useCallback(async () => {
    const newProducts = await GetAllProduct()
    return newProducts
  })
  setProducts(getProducts)
  return (
    console.log(products)
  )
}

export default Home
