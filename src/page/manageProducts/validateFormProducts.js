const validateFormProducts = (input) => {
  const errors = {}
  if (!input.title.trim()) {
    errors.title = 'El campo titulo es requerido'
  }
  if (!input.price.trim()) {
    errors.price = 'El campo del precio es requerido'
  }
  if (!input.description.trim()) {
    errors.description = 'El campo descripción es requerido'
  }
  if (!Object.keys(input.images)) {
    errors.images = 'El campo imagen es requerido'
  }
  if (!input.categoryId) {
    errors.categoryId = 'El campo categoria es requerido'
  }

  return errors
}

export default validateFormProducts
