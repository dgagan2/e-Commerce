const Product = 'https://api.escuelajs.co/api/v1/products'

export const GetAllProduct = async () => {
  try {
    const response = await fetch(Product)
    const json = await response.json()
    console.log(json)
    return json
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
