import React from 'react'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = () => {
  return (
    <section className='Loading d-flex flex-column align-items-center'>
      <Spinner color='dark' style={{ width: '60px', height: '60px' }} />
      <b className='fs-3' style={{ padding: '10px' }}>Cargando ...</b>
    </section>

  )
}

export default Loading
