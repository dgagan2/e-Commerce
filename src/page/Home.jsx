import { GetAllProduct } from '../API/getData'
import './Home.css'
const Home = () => {
  const newProducts = GetAllProduct()
  console.log(newProducts)
  return (
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
  )
}

export default Home
