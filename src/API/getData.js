import { useEffect, useState } from 'react'
import { useProductContext } from '../hooks/UseProductContext'
const Product = 'https://api.escuelajs.co/api/v1/products'
const Categories = 'https://api.escuelajs.co/api/v1/categories'

const GetAllProduct = (id) => {
  const { search } = useProductContext()
  const [products, setProducts] = useState([])

  const url = () => {
    if (!id && !search) {
      return (Product)
    } else if (id) {
      return (`${Product}/?categoryId=${id}`)
    } else {
      return (`${Product}/?title=${search}`)
    }
  }
  useEffect(() => {
    fetch(url())
      .then(res => res.json())
      .then(data => setProducts(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, search])
  return products
}

const GetAllCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(Categories)
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return categories
}
export { GetAllProduct, GetAllCategories }
