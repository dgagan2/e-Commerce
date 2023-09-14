/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ productsByPage, currentPage, setCurrentePage, totalProducts }) => {
  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalProducts / productsByPage); i++) {
    pageNumber.push(i)
  }
  const onPreviusPage = () => {
    setCurrentePage(currentPage - 1)
  }
  const onNextPage = () => {
    setCurrentePage(currentPage + 1)
  }
  const onSpecificPage = (n) => {
    setCurrentePage(n)
  }

  return (
    <>
      <nav aria-label='pagination' style={{ paddingBottom: '30px' }}>
        <ul className='pagination justify-content-center'>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : 'active'}`}>
            <Link className='page-link bg-light text-dark' onClick={onPreviusPage} tabIndex='-1'>Anterior</Link>
          </li>
          {pageNumber.map((NPage) => (
            <li key={NPage} className={`page-item ${NPage === currentPage ? 'active' : ''}`}>
              <Link className='page-link bg-light text-dark' onClick={() => onSpecificPage(NPage)}>{NPage}</Link>
            </li>
          ))}
          <li className={`page-item ${currentPage >= pageNumber.length ? 'disabled' : 'active'}`}>
            <Link className='page-link bg-light text-dark' onClick={onNextPage}>Siguiente</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination
