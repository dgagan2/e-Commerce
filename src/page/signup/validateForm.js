const expresiones = {
  txtPassword: /^[a-zA-Z0-9_.+-]{6,12}$/,
  txtName: /^[a-zA-ZÁ-ÿ\s]{3,50}$/,
  txtAge: /^\d{1,2}$/,
  txtEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validateForm = (input) => {
  const errors = {}
  if (!input.email.trim()) {
    errors.email = 'El campo email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      errors.email = 'La información ingresada no es un correo'
    }
  }
  if (!input.password.trim()) {
    errors.password = 'El campo contraseña es requerido'
  } else {
    if (!expresiones.txtPassword.test(input.password)) {
      errors.password = 'La contraseña debe tener minimo 6 caracteres'
    }
  }
  if (!input.name.trim()) {
    errors.name = 'El campo nombre es requerido'
  } else {
    if (!expresiones.txtName.test(input.name)) {
      errors.name = 'Datos incorrectos'
    }
  }

  return errors
}

export default validateForm
