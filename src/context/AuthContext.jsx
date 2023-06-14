/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

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
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUserPayload(decoded)
      setIsLoggin(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, isLoggin, userPayload }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
