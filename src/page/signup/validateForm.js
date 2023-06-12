const expresiones = {
  txtPassword: /^[a-zA-Z0-9_.+-]{6,12}$/,
  txtName: /^[a-zA-ZÁ-ÿ\s]{3,50}$/,
  txtAge: /^\d{1,2}$/,
  txtEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validateForm = (input) => {
  const erros = {}
  if (!input.email.trim()) {
    erros.email = 'El campo email es requerido'
  } else {
    if (!expresiones.txtEmail.test(input.email)) {
      erros.email = 'La información ingresada no es un correo'
    }
  }
  if (!input.password.trim()) {
    erros.password = 'El campo contraseña es requerido'
  } else {
    if (!expresiones.txtPassword.test(input.password)) {
      erros.password = 'La contraseña debe tener minimo 6 caracteres'
    }
  }
  if (!input.name.trim()) {
    erros.name = 'El campo nombre es requerido'
  } else {
    if (!expresiones.txtName.test(input.name)) {
      erros.name = 'Datos incorrectos'
    }
  }

  return erros
}

export default validateForm
