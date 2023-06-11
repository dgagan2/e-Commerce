const validateForm = (input) => {
  const erros = {}
  console.log(input)
  if (!input.email.trim()) {
    erros.email = 'El campo email es requerido'
  }
  if (!input.password.trim()) {
    erros.password = 'El campo contraseña es requerido'
  }
  if (!input.name.trim()) {
    erros.name = 'El campo nombre es requerido'
  }

  return erros
}

export default validateForm
