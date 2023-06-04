import Navbar from '@/components/navbar/Navbar'
import './Home.css'
import Loading from '@/components/isLoading/Loading'
import ListProducts from '../../components/home/ListProducts'
import { useProductContext } from '@/hooks/UseProductContext'
import { GetAllProduct } from '@/API/getData'
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
          : <ListProducts newProducts={newProducts} />}
      </main>

    </>

  )
}

export default Home
