import { Route, Routes } from 'react-router'
import Home from '@/page/home/Home'
import Login from '@/page/login/Login'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login/' element={<Login />} />
      <Route path='/:id' element={<Home />} />
    </Routes>
  )
}

export default RoutesIndex
