/* eslint-disable react/prop-types */
import React from 'react'

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
            <a className='page-link bg-dark text-light' onClick={onPreviusPage} tabIndex='-1'>Anterior</a>
          </li>
          {pageNumber.map((NPage) => (
            <li key={NPage} className={`page-item ${NPage === currentPage ? 'active' : ''}`}>
              <a className='page-link bg-dark text-light' onClick={() => onSpecificPage(NPage)}>{NPage}</a>
            </li>
          ))}
          <li className={`page-item ${currentPage >= pageNumber.length ? 'disabled' : 'active'}`}>
            <a className='page-link bg-dark text-light' onClick={onNextPage}>Siguiente</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination
