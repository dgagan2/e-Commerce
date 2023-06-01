import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'

function App () {
  return (
    <BrowserRouter>
      <RoutesIndex />
    </BrowserRouter>
  )
}

export default App
