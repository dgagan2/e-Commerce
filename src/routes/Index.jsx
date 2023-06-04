import { Route, Routes } from 'react-router'
import Home from '@/page/home/Home'
import Login from '@/page/login/Login'
import Details from '../page/details/Details'
import NotFound from '../page/NotFound'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login/' element={<Login />} />
      <Route path='/:id' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/error' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesIndex
