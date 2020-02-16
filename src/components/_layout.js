import React from "react"

import SEO from './seo'
import Header from "./header"
import Footer from "./footer"

import "./_styles.module.scss"
import styles from "./layout.module.scss"
require("typeface-cutive-mono")
require("typeface-montserrat")

const Layout = (props) => {

  return (
    <>
      <SEO {...props.data.markdownRemark} />
      <div className={styles.site}>
        <Header />
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
