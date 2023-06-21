import React from 'react'
import { AddProducts, DeleteProducts } from '@/components/manageProduct/Products'
import EditProduct from './EditProduct'
import Categories from './categories/Categories'
import User from './users/User'
const OptionToRender = ({ selectedOption }) => {
  let componenteRenderizado
  if (selectedOption === 1) {
    componenteRenderizado = <AddProducts />
  } else if (selectedOption === 2) {
    componenteRenderizado = <DeleteProducts />
  } else if (selectedOption === 3) {
    componenteRenderizado = <EditProduct />
  } else if (selectedOption === 4) {
    componenteRenderizado = <Categories />
  } else if (selectedOption === 5) {
    componenteRenderizado = <User />
  }
  return componenteRenderizado
}

export default OptionToRender
