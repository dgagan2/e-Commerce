const expresiones = {
  txtPassword: /^[a-zA-Z0-9_.+-]{6,12}$/,
  txtEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validateLogin = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El campo usuario es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'Usuario no valido'
    }
  }
  if (!input.password.trim()) {
    errors.password = 'El campo contraseña es requerido'
  } else {
    if (!expresiones.txtPassword.test(input.password)) {
      errors.password = 'La contraseña debe tener minimo 6 caracteres'
    }
  }
  return errors
}

export default validateLogin
