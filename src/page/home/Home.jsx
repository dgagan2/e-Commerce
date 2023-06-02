import { GetAllProduct } from '@/API/getData'
import Navbar from '@/components/navbar/Navbar'
import './Home.css'
import { useParams } from 'react-router'
import { ProductProvider } from '../../context/ProductsContext'
const Home = () => {
  const { id } = useParams('')
  const newProducts = GetAllProduct(id)
  return (
    <>
      <ProductProvider>
        <Navbar />
        <section>
          <ul>
            {newProducts.map((product) => (
              <li key={product.id}>
                <img src={product?.images[0]} alt='' />
                <p>{product.title}</p>
                <b>$ {product.price}</b>
              </li>
            ))}
          </ul>
        </section>
      </ProductProvider>
    </>

  )
}

export default Home
