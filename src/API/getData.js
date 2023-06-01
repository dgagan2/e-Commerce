import { useEffect, useState } from 'react'

const Product = 'https://api.escuelajs.co/api/v1/products'

const GetAllProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(Product)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return products
}

export { GetAllProduct }
