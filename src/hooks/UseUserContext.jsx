import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useUserContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useUserContex debe ser usado dentro de SongProvider')
  }

  return context
}
