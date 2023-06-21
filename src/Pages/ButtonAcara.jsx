import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAcara = () => {
  return (
    <div className='btn-container'>
      <div>
        <ul className='pagination' role='navigation'>
          <li className='page-item disabled' aria-disabled="true" aria-label="« Previous">
            <span className='page-link' aria-hidden="true">‹</span>
          </li>
          <Link className='page-item active' aria-current="page" to="/acara">
            <span className='page-link'>1</span>
          </Link>
          <Link className='page-item' to="/acara2">
            <a className='page-link'>2</a>
          </Link>
          <Link className='page-item' to="/acara2">
            <a className='page-link' rel='next' aria-label='Next »'>›</a>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default ButtonAcara


