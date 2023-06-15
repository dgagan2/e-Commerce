import axios from 'axios'

const User = 'https://api.escuelajs.co/api/v1/users/'
const Login = 'https://api.escuelajs.co/api/v1/auth/login'
const Profile = 'https://api.escuelajs.co/api/v1/auth/profile'
const registrerUser = async (user) => {
  try {
    const response = await fetch(User, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    )
    if (response.ok) {
      return response
    }
  } catch (error) {
    return error
  }
}
const LoginJWT = (data) => axios.post(`${Login}`, data)
const getProfile = (token) => axios.get(`${Profile}`, { headers: { Authorization: 'Bearer ' + token } })
export { registrerUser, LoginJWT, getProfile }
