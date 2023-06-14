import { useState } from 'react'

function useForm (callback, defaults) {
  // Estado único para guardar todos los valores del formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evita que se recargue la página y rompa el SPA
    callback(input)
  }

  // Función que se ejecuta al teclear en un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  return {
    input,
    handleSubmit,
    handleInputChange
  }
}

export default useForm
