import React from 'react'

const Signup = () => {
  return (
    <>
      <main className='containerSignup'>
        <form className='formSignup'>
          <section className='signupFormFields'>
            <div>
              <label htmlFor=''>Id</label>
              <input type='number' />
            </div>
            <div>
              <label htmlFor=''>Email</label>
              <input type='email' />
            </div>
            <div>
              <label htmlFor=''>Contraseña</label>
              <input type='password' />
            </div>
            <div>
              <label htmlFor=''>Nombre</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Avatar</label>
              <input type='text' />
            </div>
          </section>
          <section className='signupFormButtons'>
            <button>Registrarse</button>
            <button>Volver</button>
          </section>
        </form>
      </main>
    </>
  )
}

export default Signup
