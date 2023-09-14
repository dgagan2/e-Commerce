import { useEffect, useState } from 'react'
import { useProductContext } from '../hooks/UseProductContext'
import axios from 'axios'
const Product = 'https://api.escuelajs.co/api/v1/products'
const Categories = 'https://api.escuelajs.co/api/v1/categories'

const GetAllProduct = (id) => {
  const { search, changeLoading, setError, products, setProducts } = useProductContext()
  const url = () => {
    if (!id && !search) {
      return (Product)
    } else if (id) {
      setError('')
      return (`${Product}/?categoryId=${id}`)
    } else {
      return (`${Product}/?title=${search}`)
    }
  }
  useEffect(() => {
    fetch(url())
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          setError('No se encontraron resultados, busque otro producto')
        } else { setProducts(data) }
      }
      )
    changeLoading()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, search])
  return products
}

const AddProduct = (product) => axios.post(`${Product}/`, {
  title: product.title,
  price: product.price,
  description: product.description,
  categoryId: product.categoryId,
  images: [product.images]
})
const DeleteProduct = (id) => axios.delete(`${Product}/${id}`)
const GetProductById = (id) => axios.get(`${Product}/${id}`)
const UpdateProduct = (id, product) => axios.put(`${Product}/${id}`, product)
const GetAllCategories = () => axios.get(`${Categories}`)

export { GetAllProduct, GetAllCategories, Product, AddProduct, DeleteProduct, GetProductById, UpdateProduct }
