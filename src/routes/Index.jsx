import { Route, Routes } from 'react-router'
import Home from '@/page/home/Home'
import Login from '@/page/login/Login'
import Details from '../page/details/Details'
import NotFound from '../page/NotFound'
import Signup from '../page/signup/Signup'
import ShoppingList from '../page/shoppingList/ShoppingList'
import { useUserContext } from '@/hooks/UseUserContext'
import ManageProducts from '../page/manageProducts/ManageProducts'
import EditProduct from '../components/manageProduct/EditProduct'
const RoutesIndex = () => {
  const { profile, isLoggin } = useUserContext()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/login/' element={isLoggin
          ? <Home />
          : <Login />}
      />
      <Route path='/:id' element={<Home />} />
      <Route path='/product/:product' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route
        path='/signup' element={isLoggin
          ? <Home />
          : <Signup />}
      />
      <Route
        path='/shopping' element={isLoggin
          ? <ShoppingList />
          : <NotFound />}
      />
      <Route
        path='/inventory' element={profile.role === 'admin'
          ? <ManageProducts />
          : <NotFound />}
      />
      <Route path='/error' element={<NotFound />} />
      <Route
        path='/inventory/edit/:id' element={profile.role === 'admin'
          ? <ManageProducts />
          : <NotFound />}
      />
      <Route path='/error' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesIndex
