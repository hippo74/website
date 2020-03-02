import React from 'react'

import styles from './button.module.scss'

const Button = props => {
  const {
    children,
    onClick = null,
    type
  } = props

  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
