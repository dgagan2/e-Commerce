import Navbar from '@/components/navbar/Navbar'
import './Home.css'
import Loading from '@/components/isLoading/Loading'
import ListProductsHome from '../../components/home/ListProducts'
import { useProductContext } from '@/hooks/UseProductContext'
import { GetAllProduct } from '@/services/API'
import { useParams } from 'react-router'
const Home = () => {
  const { id } = useParams('')
  const newProducts = GetAllProduct(id)
  const { isLoading } = useProductContext()
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {isLoading
          ? <Loading />
          : <ListProductsHome newProducts={newProducts} />}
      </main>

    </>

  )
}

export default Home
