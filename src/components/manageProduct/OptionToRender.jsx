import React from 'react'
import { AddProducts, DeleteProducts } from '@/components/manageProduct/Products'
import EditProduct from './EditProduct'
const OptionToRender = ({ selectedOption }) => {
  let componenteRenderizado
  if (selectedOption === 1) {
    componenteRenderizado = <AddProducts />
  } else if (selectedOption === 2) {
    componenteRenderizado = <DeleteProducts />
  } else if (selectedOption === 3) {
    componenteRenderizado = <EditProduct />
  } else if (selectedOption === 4) {
    componenteRenderizado = <p>4</p>
  } else if (selectedOption === 5) {
    componenteRenderizado = <p>5</p>
  }
  return componenteRenderizado
}

export default OptionToRender
