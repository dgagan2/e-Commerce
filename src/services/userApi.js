const User = 'https://api.escuelajs.co/api/v1/users/'
const registrerUser = async (user) => {
  try {
    const response = await fetch(User, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    if (response.ok) {
      const jsonResponse = await response.json()
      console.log(jsonResponse)
    }
  } catch (error) {
    console.error(error)
  }
}

export { registrerUser }
