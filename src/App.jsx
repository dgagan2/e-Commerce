import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import { ProductProvider } from '@/context/ProductsContext'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <RoutesIndex />
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
