import React from "react"

import SEO from './seo'
import Header from "./header"
import "./layout.css"

const Layout = (props) => {
  return (
    <>
      <SEO {...props.data.markdownRemark} />
      <Header siteTitle='bryna bobick' />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
