import React from 'react'
import notFound from '@/assets/404.jpg'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
      <div className='d-flex align-items-center flex-column'>
        <img style={{ width: '700px' }} src={notFound} />
        <button style={{ borderStyle: 'none', backgroundColor: 'rgb(83, 83, 83)', padding: '10px' }}>
          <Link to='/'>Go to home page</Link>
        </button>
      </div>

    </>
  )
}

export default NotFound
