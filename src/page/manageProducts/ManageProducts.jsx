import React from 'react'
import './manageProducts.css'
import Navbar from '../../components/navbar/Navbar'
import NavbarAdminProducts from '../../components/manageProduct/NavbarAdminProducts'
import OptionToRender from '../../components/manageProduct/OptionToRender'
import { useProductContext } from '@/hooks/UseProductContext'
const ManageProducts = () => {
  const { selectedOption, setSelectedOption } = useProductContext()
  // const [selectedOption, setSelectedOption] = useState(1)
  return (
    <>
      <Navbar />
      <NavbarAdminProducts setSelectedOption={setSelectedOption} />
      <OptionToRender selectedOption={selectedOption} />
    </>

  )
}

export default ManageProducts
