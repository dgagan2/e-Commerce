import React from 'react'
import { AddProducts, DeleteProducts } from '@/components/manageProduct/Products'
import EditProduct from './EditProduct'
import Categories from './categories/Categories'
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
    componenteRenderizado = <p>5</p>
  }
  return componenteRenderizado
}

export default OptionToRender
