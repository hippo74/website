import React from "react"

import styles from "./footer.module.scss"

const Footer = () => {

  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
