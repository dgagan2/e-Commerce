export function useProducts () {
  const [products, setProducts] = useState()
  const getProducts = useCallback(async () => {
    const newProducts = await GetAllProduct()
    setProducts(newProducts)
  })
  return getProducts
}
