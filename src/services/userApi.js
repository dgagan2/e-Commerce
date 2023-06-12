const User = 'https://api.escuelajs.co/api/v1/users/'
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
    console.error(error, 'error')
    return error
  }
}

export { registrerUser }
