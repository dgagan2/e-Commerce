import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import { ProductProvider } from '@/context/ProductsContext'

function App () {
  return (
    <BrowserRouter>
      <ProductProvider>
        <RoutesIndex />
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
