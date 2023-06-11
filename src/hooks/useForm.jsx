import { useState } from 'react'
import validateForm from '@/page/signup/validateForm'
function useForm (callback, defaults) {
  // Estado único para guardar todos los valores del formulario en un objeto
  const [input, setInput] = useState(defaults)
  const [errorsRegitrerUser, setErrorsRegitrerUser] = useState({})
  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault() // evita que se recargue la página y rompa el SPA
    callback(input)
    setErrorsRegitrerUser(validateForm(input))
    console.log(input)
  }

  // Función que se ejecuta al teclear en un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
    setErrorsRegitrerUser(validateForm(input))
  }

  return {
    input,
    handleSubmit,
    handleInputChange,
    errorsRegitrerUser
  }
}

export default useForm
