import { GetAllProduct } from '../API/getData'
import Navbar from '../components/Navbar'
import './Home.css'
import { useParams } from 'react-router'
const Home = () => {
  const { id } = useParams('')
  const newProducts = GetAllProduct(id)
  return (
    <>
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
    </>

  )
}

export default Home
