/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { getProfile } from '../services/userApi'
import { useProductContext } from '@/hooks/UseProductContext'
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(false)
  const [userPayload, setUserPayload] = useState(null)
  const [profile, setProfile] = useState([])
  const token = localStorage.getItem('token')
  const { setShoppingList } = useProductContext()

  const login = (token) => {
    localStorage.setItem('token', token)
    const decoded = jwt_decode(token)
    setUserPayload(decoded)
    setIsLoggin(true)
  }
  const logout = () => {
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsLoggin(false)
    setShoppingList([])
  }
  const handleProfile = async (token) => {
    const response = await getProfile(token)
    setProfile(response.data)
  }
  useEffect(() => {
    if (token) {
      handleProfile(token)
      const decoded = jwt_decode(token)
      setUserPayload(decoded)
      setIsLoggin(true)
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ login, logout, isLoggin, userPayload, profile }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
