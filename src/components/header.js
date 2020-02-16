import { Link } from 'gatsby'
import React from 'react'

import styles from './header.module.scss'

const Header = (props) => (
  <header className={styles['header']}>
    <Link
      to='/'
      className={styles['header__logo']}
    >
      Bryna Bobick
    </Link>
    <nav className={styles['header__nav']}>
      <ul>
        {['art', 'education', 'partnerships'].map((page, index) => {
          return (
            <li 
              key={index}
              className={styles['header__nav-item']}
            >
              <Link
                key={index}
                to={page}
              >
                {page}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  </header>
)

export default Header
