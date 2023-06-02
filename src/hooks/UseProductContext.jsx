import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProductContext = () => {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error('useSongContext debe ser usado dentro de SongProvider')
  }

  return context
}
