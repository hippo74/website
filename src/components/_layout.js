import React from "react"

import SEO from './seo'
import Header from "./header"
import Footer from "./footer"

import "./layout.module.scss"
require("typeface-cutive-mono")
require("typeface-montserrat")

const Layout = (props) => {

  return (
    <>
      <SEO {...props.data.markdownRemark} />
      <Header siteTitle='bryna bobick' />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
