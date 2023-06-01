import { Route, Routes } from 'react-router'
import Home from '../page/Home'
import Login from '../page/Login'

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
